
namespace OnlineGiftWebApp.Data
{
    using Microsoft.AspNetCore.Identity;
    using System;
    using System.ComponentModel.DataAnnotations.Schema;
    public class User : IdentityUser
    {
        public User() { }

        [Column(TypeName = "varchar(100)")]
        public string FirstName { get; set; }

        [Column(TypeName = "varchar(100)")]
        public string LastName { get; set; }

        [Column(TypeName = "varchar(500)")]
        public string ProfilePic { get; set; }

        //public string Country { get; set; }

        [Column(TypeName = "varchar(100)")]
        public string State { get; set; }

        [Column(TypeName = "varchar(100)")]
        public string City { get; set; }

        [Column(TypeName = "varchar(500)")]
        public string Address { get; set; }

        [Column(TypeName = "varchar(50)")]
        public string PostalCode { get; set; }

        public bool IsActive { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime? Birthdate { get; set; }

        public DateTime CreatedDate { get; set; }

    }
}
