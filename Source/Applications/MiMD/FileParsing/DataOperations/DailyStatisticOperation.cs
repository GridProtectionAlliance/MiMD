using GSF.Configuration;
using GSF.Data;
using GSF.Net.Security;
using GSF.Web;
using log4net;
using MiMD.DataSets;
using MiMD.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Threading;
using System.Web;
using SystemCenter.Model;

namespace MiMD.FileParsing.DataOperations
{
    public class DailyStatisticOperation : IDataOperation
    {
        private static Mutex s_mutex = new Mutex();
        private static readonly ILog Log = LogManager.GetLogger(typeof(DailyStatisticOperation));

        public DailyStatisticOperation()
        {
        }

        public bool Execute(MeterDataSet meterDataSet)
        {
            try
            {
                s_mutex.WaitOne();

                using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
                {

                    string url = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'SystemCenter.Url'");
                    string credential = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'SystemCenter.Credential'");
                    string password = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'SystemCenter.Password'");

                    // Get MiMD Statistic record for current meter and date
                    string meter = meterDataSet.Meter.AssetKey;

                    MiMDDailyStatistic record = GetRecord(url, credential, password, meter);

                    // if 
                    if (record == null)
                    {
                        record = new MiMDDailyStatistic();
                        record.Meter = meterDataSet.Meter.AssetKey;
                        record.Date = DateTime.Now.Date.ToString("MM/dd/yyyy");

                        if(meterDataSet.FileProcessingError == null)
                            record.LastSuccessfulFileProcessed = DateTime.Now;
                        else
                            record.LastUnsuccessfulFileProcessed = DateTime.Now;

                        record.LastUnsuccessfulFileProcessedExplanation = meterDataSet.FileProcessingError;
                        record.TotalFilesProcessed = 1;
                        record.TotalSuccessfulFilesProcessed = (meterDataSet.FileProcessingError == null ? 1 : 0);
                        record.TotalUnsuccessfulFilesProcessed = (meterDataSet.FileProcessingError == null ? 0 : 1);
                        record.ConfigChanges = meterDataSet.ConfigChanges;

                        if (meterDataSet.ConfigChanges > 0)
                            record.LastConfigFileChange = DateTime.Now;

                        record.DiagnosticAlarms = meterDataSet.DiagnosticAlarms;
                        record.ComplianceIssues = meterDataSet.ComplianceIssues;
                    }
                    else if (record.Date != DateTime.Now.Date.ToString("MM/dd/yyyy"))
                    {
                        MiMDDailyStatistic lastRecord = record;
                        record = new MiMDDailyStatistic();
                        record.Meter = lastRecord.Meter;
                        record.Date = DateTime.Now.Date.ToString("MM/dd/yyyy");

                        if (meterDataSet.FileProcessingError == null)
                            record.LastSuccessfulFileProcessed = DateTime.Now;
                        else
                            record.LastUnsuccessfulFileProcessed = DateTime.Now;

                        if (meterDataSet.ConfigChanges > 0)
                            record.LastConfigFileChange = DateTime.Now;
                        


                        record.LastUnsuccessfulFileProcessedExplanation = (meterDataSet.FileProcessingError == null ? lastRecord.LastUnsuccessfulFileProcessedExplanation : meterDataSet.FileProcessingError);
                        record.TotalFilesProcessed = lastRecord.TotalFilesProcessed + 1;
                        record.TotalSuccessfulFilesProcessed = lastRecord.TotalSuccessfulFilesProcessed + (meterDataSet.FileProcessingError == null ? 1 : 0);
                        record.TotalUnsuccessfulFilesProcessed = lastRecord.TotalUnsuccessfulFilesProcessed + (meterDataSet.FileProcessingError == null ? 0 : 1);
                        record.ConfigChanges = lastRecord.ConfigChanges + meterDataSet.ConfigChanges;
                        record.DiagnosticAlarms = lastRecord.DiagnosticAlarms + meterDataSet.DiagnosticAlarms;
                        record.ComplianceIssues = lastRecord.ComplianceIssues + meterDataSet.ComplianceIssues;
                    }
                    else
                    {
                        if (meterDataSet.FileProcessingError == null)
                            record.LastSuccessfulFileProcessed = DateTime.Now;
                        else
                            record.LastUnsuccessfulFileProcessed = DateTime.Now;

                        record.LastUnsuccessfulFileProcessedExplanation = (meterDataSet.FileProcessingError == null ? record.LastUnsuccessfulFileProcessedExplanation : meterDataSet.FileProcessingError); ;
                        record.TotalFilesProcessed += 1;
                        record.TotalSuccessfulFilesProcessed += (meterDataSet.FileProcessingError == null ? 1 : 0);
                        record.TotalUnsuccessfulFilesProcessed += (meterDataSet.FileProcessingError == null ? 0 : 1);
                        record.ConfigChanges += meterDataSet.ConfigChanges;

                        if (meterDataSet.ConfigChanges > 0)
                            record.LastConfigFileChange = DateTime.Now;

                        record.DiagnosticAlarms += meterDataSet.DiagnosticAlarms;
                        record.ComplianceIssues += meterDataSet.ComplianceIssues;

                    }

                    HttpStatusCode code = UpdateRecord(url, credential, password, record);

                    if (code != HttpStatusCode.OK) throw new Exception("Failed to add or update daily statistics.");
                }
            }
            catch (Exception ex)
            {
                Log.Error($"Failed to create daily statistic for {meterDataSet.Meter.AssetKey} - {ex.Message}");
            }
            finally
            {
                s_mutex.ReleaseMutex();
            }

            return true;
        }

        public MiMDDailyStatistic GetRecord(string url, string credential, string password, string meter) 
        {
            using (WebRequestHandler handler = new WebRequestHandler())
            using (HttpClient client = new HttpClient(handler))
            {
                handler.ServerCertificateValidationCallback += HandleCertificateValidation;

                client.BaseAddress = new Uri(url);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.AddBasicAuthenticationHeader(credential, password);

                HttpResponseMessage response = client.GetAsync($"api/SystemCenter/Statistics/MiMD/Last/{meter}").Result;

                if (!response.IsSuccessStatusCode)
                    throw new InvalidOperationException($"Server returned status code {response.StatusCode}: {response.ReasonPhrase}");

                string record = response.Content.ReadAsStringAsync().Result;
                if(record != "\"null\"") return JsonConvert.DeserializeObject<MiMDDailyStatistic>(record);
                else return null;
            }
        }

        public HttpStatusCode UpdateRecord(string url, string credential, string password, MiMDDailyStatistic record)
        {
            string antiForgeryToken = GenerateAntiForgeryToken(url, credential, password);

            using (WebRequestHandler handler = new WebRequestHandler())
            using (HttpClient client = new HttpClient(handler))
            {
                handler.ServerCertificateValidationCallback += HandleCertificateValidation;

                client.BaseAddress = new Uri(url);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.DefaultRequestHeaders.Add("X-GSF-Verify", antiForgeryToken);
                client.AddBasicAuthenticationHeader(credential, password);

                HttpResponseMessage response = client.PutAsJsonAsync($"api/SystemCenter/Statistics/MiMD/Update", record).Result;
                return response.StatusCode;
            }
        }


        private string GenerateAntiForgeryToken(string url, string credential, string password)
        {
            using (WebRequestHandler handler = new WebRequestHandler())
            using (HttpClient client = new HttpClient(handler))
            {
                handler.ServerCertificateValidationCallback += HandleCertificateValidation;

                client.BaseAddress = new Uri(url);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.AddBasicAuthenticationHeader(credential, password);

                HttpResponseMessage response = client.GetAsync("api/rvht").Result;

                if (!response.IsSuccessStatusCode)
                    throw new InvalidOperationException($"Server returned status code {response.StatusCode}: {response.ReasonPhrase}");

                return response.Content.ReadAsStringAsync().Result;
            }
        }

        private static bool HandleCertificateValidation(Object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors)
        {
            SimpleCertificateChecker simpleCertificateChecker = new SimpleCertificateChecker();

            CategorizedSettingsElementCollection systemSettings = ConfigurationFile.Current.Settings["systemSettings"];
            systemSettings.Add("CertFile", "", "This is a certfile.");
            systemSettings.Add("ValidPolicyErrors", "None", "Password for PQMarkWeb API access.");
            systemSettings.Add("ValidChainFlags", "NoError", "Password for PQMarkWeb API access.");

            try
            {
                simpleCertificateChecker.ValidPolicyErrors = (SslPolicyErrors)Enum.Parse(typeof(SslPolicyErrors), (systemSettings["ValidPolicyErrors"].Value != "All" ? systemSettings["ValidPolicyErrors"].Value : "7"));
                simpleCertificateChecker.ValidChainFlags = (X509ChainStatusFlags)Enum.Parse(typeof(X509ChainStatusFlags), (systemSettings["ValidChainFlags"].Value != "All" ? systemSettings["ValidChainFlags"].Value : (~0).ToString()));
                simpleCertificateChecker.TrustedCertificates.Add((!string.IsNullOrEmpty(systemSettings["CertFile"].Value) ? new X509Certificate2(systemSettings["CertFile"].Value) : certificate));
            }
            catch (Exception ex)
            {
            }

            return simpleCertificateChecker.ValidateRemoteCertificate(sender, certificate, chain, sslPolicyErrors);
        }


    }
}