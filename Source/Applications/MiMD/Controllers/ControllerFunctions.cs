using GSF.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;

namespace MiMD.Controllers
{
    public class ControllerFunctions
    {
        // Applies authentication for requests using Windows pass-through authentication.
        public static SecurityPrincipal AuthenticatePassthrough(IPrincipal user)
        {
            string username = user?.Identity.Name;

            if ((object)username == null)
                return null;

            // Get the principal used for verifying the user's pass-through authentication
            IPrincipal passthroughPrincipal = user;

            // Create the security provider that will verify the user's pass-through authentication
            ISecurityProvider securityProvider = SecurityProviderCache.CreateProvider(username, passthroughPrincipal, false);
            securityProvider.Authenticate();

            // Return the security principal that will be used for role-based authorization
            SecurityIdentity securityIdentity = new SecurityIdentity(securityProvider);
            return new SecurityPrincipal(securityIdentity);
        }


    }
}