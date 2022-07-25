using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaceConclave.Controllers
{
    public class Account : Controller
    {
       
        public ActionResult Login()
        {
            TempData["RegisterSucess"] = "";
            TempData["RegisterError"] = "";
            return View();
        }


    }
}
