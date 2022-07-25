using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PaceConclaveVM.Account
{
    public class LoginVM
    {
        [Required(ErrorMessage = "Please Enter Your EmailID ")]
        [Display(Name = "EmailID")]
        public string EmailID { get; set; }
        [Required(ErrorMessage = "Please Enter Password")]
        [Display(Name = "Password")]
        public string Password { get; set; }
    }
}
