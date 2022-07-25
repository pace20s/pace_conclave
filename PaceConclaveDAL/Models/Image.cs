using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PaceConclaveDAL.Models
{
    public class Image
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Catagory { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string AltMobile { get; set; }
        public string PapperId { get; set; }
        public string PapperTittle { get; set; }
        public string PapperAuthor { get; set; }
        public string AffilicationAuthor { get; set; }
        public string CorrespondingAuthor { get; set; }
        public string CorrespondingAuthorEmail { get; set; }
        public string TransactionId { get; set; }
        public string TransactionDate { get; set; }
        public string ImageName { get; set; }
        public string AmountPaid { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Postal { get; set; }
        public string Comments { get; set; }
        public DateTime? CreateDateTime { get; set; }
    }
}
