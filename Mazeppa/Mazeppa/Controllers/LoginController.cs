using DAL.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mazeppa.Controllers
{
    public class LoginController : Controller
    {
        private Context db = new Context();
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public string Login(User data)
        {
            string un = data.Email;
            string Password = data.Password;

            var user = db.Users.Where(u => u.Email == un).FirstOrDefault();
            if (user != null)
            {
                if (Password == user.Password)
                {
                    Session["LoginID"] = user.UserID;
                    Session["Username"] = user.FirstName + ' ' + user.LastName;
                    return user.UserID.ToString();
                }
                else
                {
                    return "0";
                }
            }
            else
            {
                return "-1";
            }
        }
    }
}