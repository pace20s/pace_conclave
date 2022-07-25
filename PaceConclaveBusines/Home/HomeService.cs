using PaceConclaveDAL.Models;
using PaceConclaveVM.Home;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PaceConclaveBusines.Home
{
    public class HomeService : IHomeService
    {
        private PaceContext _Db { get; }
        public HomeService(PaceContext dxContext)
        {
            _Db = dxContext;
        }


        public bool CheckExistingUser(SubscriptionVM sub)
        {
            var result = this._Db.Subscriptions.Where(x => x.FullName == sub.FullName).ToList().FirstOrDefault();
            if(result != null)
            {
                return true;
            }
            return false;
        }

        public bool RegisterNewUser(SubscriptionVM sub)
        {
            Subscription Sub = new Subscription
            {
                FullName = sub.FullName,
                CreateDateTime = DateTime.Now

            };
            _Db.Subscriptions.Add(Sub);
            int res = _Db.SaveChanges();
            if(res > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public int AddContactdetails(ContactVM contact)
        {
            Contact cont = new Contact
            {
                FirstName = contact.Name,
                LastName = contact.LastName,
                Phone = contact.Phone,
                Email = contact.Email,
                Mesage = contact.Message,
                CreateDateTime = DateTime.Now
            };
            _Db.Contacts.Add(cont);
            int res = _Db.SaveChanges();
             return cont.UserId;
        }
    }
}
