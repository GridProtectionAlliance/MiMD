using GSF.Configuration;
using GSF.Data;
using GSF.Data.Model;
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

                    // Get MiMD Statistic record for current meter and date
                    string meter = meterDataSet.Meter.AssetKey;

                    MiMDDailyStatistic record = GetRecord(meter);

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

                    int warningLevel = int.Parse(GetSetting("MiMD.WarningLevel")?.Value ?? "50");
                    int errorLevel = int.Parse(GetSetting("MiMD.ErrorLevel")?.Value ?? "100");

                    if (record.Status == "Error") { } // already an error, do nothing
                    else if (record.TotalUnsuccessfulFilesProcessed > errorLevel)
                    {
                        record.Status = "Error";
                        record.BadDays++;
                    }
                    else if (record.DiagnosticAlarms > errorLevel)
                    {
                        record.Status = "Error";
                        record.BadDays++;
                    }
                    else if (record.ComplianceIssues > errorLevel)
                    {
                        record.Status = "Error";
                        record.BadDays++;
                    }
                    else if (record.Status == "Warning") { } // already a warning, do nothing
                    else if (record.TotalUnsuccessfulFilesProcessed > warningLevel)
                    {
                        record.Status = "Warning";
                    }
                    else if (record.DiagnosticAlarms > warningLevel)
                    {
                        record.Status = "Warning";
                    }
                    else if (record.ComplianceIssues > warningLevel)
                    {
                        record.Status = "Warning";
                    }

                    UpdateRecord(record);
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

        public MiMDDailyStatistic GetRecord(string meter)
        {
            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                MiMDDailyStatistic statistic = new TableOperations<MiMDDailyStatistic>(connection).QueryRecords("[Date] DESC", new RecordRestriction("Meter = {0}", meter)).FirstOrDefault();
                return statistic;
            }
        }

        public SystemCenter.Model.Setting GetSetting(string setting)
        {
            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                SystemCenter.Model.Setting record = new TableOperations<SystemCenter.Model.Setting>(connection).QueryRecordWhere("Name = {0}", setting);
                return record;
            }
        }

        public void UpdateRecord(MiMDDailyStatistic record)
        {
            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                new TableOperations<MiMDDailyStatistic>(connection).UpdateRecord(record);
            }
        }
    }
}