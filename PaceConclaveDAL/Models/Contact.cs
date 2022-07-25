using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PaceConclaveDAL.Models
{
    public class Contact
    {
        [Key]
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Mesage { get; set; }
        public DateTime? CreateDateTime { get; set; }
    }
}
