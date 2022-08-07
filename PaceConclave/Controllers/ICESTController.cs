using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using PaceConclaveVM.ICEST;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace PaceConclave.Controllers
{
    public class ICESTController : Controller
    {
        private readonly IWebHostEnvironment _hostEnvironment;
        public ICESTController(IWebHostEnvironment hostEnvironment)
        {
            _hostEnvironment = hostEnvironment;
        }


        public ActionResult Icest()
        {
            return View();
        }

        public ActionResult Track()
        {
            ViewData["Track"] = true;
            return View();
        }

        public ActionResult Callforpapper()
        {
            ViewData["callforpapper"] = true;
            return View();
        }

        public ActionResult Bestpapperawards()
        {
            ViewData["BestPapper"] = true;
            return View();
        }

        public ActionResult Submission()
        {
            ViewData["submission"] = true;
            return View();
        }

        public ActionResult Register()
        {
            return View();
        }

        public ActionResult Patrons()
        {
            ViewData["patron"] = true;
            return View();
        }

        public ActionResult Aboutus()
        {
            ViewData["aboutus"] = true;
            return View();
        }

        public ActionResult Speakers()
        {
            ViewData["speakers"] = true;
            return View();
        }

        public ActionResult Schedule()
        {
            ViewData["schedule"] = true;
            return View();
        }

        public ActionResult Contact()
        {
            ViewData["contact"] = true;
            return View();
        }

        public ActionResult Advisor()
        {
            ViewData["advisor"] = true;
            return View();
        }
        public ActionResult Technical()
        {
            ViewData["technical"] = true;
            return View();
        }

        public ActionResult Registerformsubmit(RegisterVM rig)
        {
            //Save image to wwwroot/ICEST/Image
            string wwwRootPath = _hostEnvironment.WebRootPath;
            string fileName = Path.GetFileNameWithoutExtension(rig.ImageFile.FileName);
            string extension = Path.GetExtension(rig.ImageFile.FileName);
            rig.ImageName = fileName = fileName + DateTime.Now.ToString("dd MM yyyy hh mm ss tt") + extension;
            string path = Path.Combine(wwwRootPath + "/ICEST/Image/", fileName);
            using(var fileStream = new FileStream(path, FileMode.Create))
            {
                 rig.ImageFile.CopyToAsync(fileStream);
            }
            return View();
        }
    }
}
