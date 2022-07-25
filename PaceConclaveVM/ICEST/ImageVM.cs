using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PaceConclaveVM.ICEST
{
    public class ImageVM
    {
        [Column(TypeName ="nvarchar(50)")]
        public string Title { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [DisplayName("Image Name")]
        public string ImageName { get; set; }

        [DisplayName("Upload File")]
        public IFormFile ImageFile { get; set; }
    }
}
