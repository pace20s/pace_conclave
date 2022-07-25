using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PaceConclave.Models;
using PaceConclaveBusines.Home;
using PaceConclaveVM.Home;
using PaceConclaveVM.ICEST;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace PaceConclave.Controllers
{
    public class HomeController : Controller
    {

        private readonly IHomeService _homeService;
        public HomeController(IHomeService homeService)
        {
            _homeService = homeService;
        }


        public ActionResult Index()
        {
            string wish = "";

            if (DateTime.Now.Hour < 12)
            {
                wish = "Good Morning";
            }
            else if (DateTime.Now.Hour < 17)
            {
                wish = "Good Afternoon";
            }
            else
            {
                wish = "Good Evening";

            }
            TempData["RegisterError"] = "";
            TempData["RegisterSucess"] = "";
            TempData["Wish"] = wish + "!!";
            return View();
        }

        public ActionResult About()
        {
            return View();
        }
       
        public ActionResult Contact(bool msg= false)
        { 
            if(msg==true)
            {
                TempData["ContactSucess"] = "Submitted Sucessfully";
                return View();
            }
            TempData["ContactError"] = "";
            TempData["ContactSucess"] = "";
            return View();
        }

        public ActionResult Gallery()
        {
            return View();
        }

        
















        //public ActionResult Subscription()
        //{
        //    TempData["RegisterError"] = "";
        //    TempData["RegisterSucess"] = "haii";

        //    return View();
        //}
        [HttpPost]
        public ActionResult Subscriptionsubmit(SubscriptionVM sub)
        {
            if (ModelState.IsValid)
            {
                bool isExistinguser = _homeService.CheckExistingUser(sub);
                if (!isExistinguser)
                {
                    bool isUsrCreated = _homeService.RegisterNewUser(sub);
                    if (isUsrCreated)
                    {
                        TempData["RegisterSucess"] = "Thanq for Subscribing";
                        return View("Index");
                    }
                    TempData["RegisterError"] = "Subscribtion Failed, Please Try Again";
                }
                TempData["RegisterError"] = "User Already Exist";
            }
            return View("Index", sub);
        }

        public ActionResult Contactformsubmit(ContactVM contact)
        {
            
                int Contactdetails = _homeService.AddContactdetails(contact);
            if(Contactdetails > 0)
            {
                return RedirectToAction(nameof(Contact), new { msg = true });
            }
                TempData["ContactError"] = "Failed, Please Try Again ";

            return View("Contact");
        }

        public ActionResult Registerformsubmit(RegisterVM rig)
        {
            return View();
        }


    }
}
