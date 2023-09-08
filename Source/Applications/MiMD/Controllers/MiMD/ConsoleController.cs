using openXDA.APIAuthentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MiMD.Controllers.MiMD
{
    public class ConsoleController : APIConsoleController
    {
        protected override IAPIConsoleHost Host => Program.Host;
    }
}