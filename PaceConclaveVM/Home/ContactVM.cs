using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PaceConclaveVM.Home
{
    public class ContactVM
    {
        [Required(ErrorMessage = "Please Enter Your EmailID ")]
        public string Name { get; set; }
        
        public string LastName { get; set; }

        [Required(ErrorMessage = "Please Enter Your PhoneNumber ")]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Please Enter Your EmailID ")]
        public string Email { get; set; }
        public string Message { get; set; }
    }
}
