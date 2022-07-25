using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PaceConclaveDAL.Models
{
    public class Subscription
    {
        [Key]
        public int UserId { get; set; }
        public string FullName { get; set; }
        public DateTime? CreateDateTime { get; set; }
    }
}
