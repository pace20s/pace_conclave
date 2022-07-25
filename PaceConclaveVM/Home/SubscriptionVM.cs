using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PaceConclaveVM.Home
{
    public class SubscriptionVM
    {
        [Required(ErrorMessage = "Please Enter Your Full Name")]
        [Display(Name = "FullName")]
        public string FullName { get; set; }
    }


}
