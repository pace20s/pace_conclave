using PaceConclaveVM.Home;
using System;
using System.Collections.Generic;
using System.Text;

namespace PaceConclaveBusines.Home
{
    public interface IHomeService
    {
        bool CheckExistingUser(SubscriptionVM sub);
        bool RegisterNewUser(SubscriptionVM sub);
        int AddContactdetails(ContactVM contact);
    }
}
