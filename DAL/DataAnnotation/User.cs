using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DataAccess
{
    [MetadataType(typeof(UserMetaData))]
    public partial class  User
    {

    }
    public class UserMetaData
    {
        public long UserID { get; set; }
        [Required, Display(Name = "First Name")]
        public string FirstName { get; set; }
        [Required, Display(Name = "Last Name")]
        public string LastName { get; set; }
        [Required, DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required, DataType(DataType.Password)]
        public string Password { get; set; }
        [Required]
        public Nullable<int> RolID { get; set; }
        public Nullable<bool> IsActive { get; set; }
    }
}
