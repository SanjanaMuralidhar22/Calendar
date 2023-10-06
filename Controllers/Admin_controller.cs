using MeetingManagement.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Reflection;
using System.Security.Claims;
using System.Text;

namespace MeetingManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Admin_controller : ControllerBase
    {
        private readonly MeetingRoomDbcontext _component;

        public Admin_controller(MeetingRoomDbcontext component)
        {
            _component = component;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAllAdmin()
        {
            var admin = await _component.Admins.ToListAsync();
            return Ok(admin);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdminBy(int id)
        {
            var select = await _component.Admins.FindAsync(id);
            return Ok(select);
        }

        /*[HttpGet]
        public async Task<ActionResult<Admin>> GetByName([FromQuery] string name)
        {
            //foreach(var admin in )

            var select = await _component.Admins.FindAsync(name);
            return Ok(select);
            //return Ok(select);
        }*/
        [HttpPost]
        public async Task<ActionResult<Admin>> AddFooditem(Admin admin)
        {
            _component.Admins.Add(admin);
            await _component.SaveChangesAsync();
            return admin;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMenu(int id, Admin admin)
        {
            var men = await _component.Admins.FindAsync(id);
            if (men == null)
            {
                throw new Exception("Admin not found to update");
            }
            else
            {
                men.AdminName = admin.AdminName;
                men.AdminPhone = admin.AdminPhone;
                men.AdminEmail = admin.AdminEmail;
                men.AdminPassword = admin.AdminPassword;
                await _component.SaveChangesAsync();
                return Ok(men);
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMenu(int id)
        {
            var menu = await _component.Admins.FindAsync(id);
            if (menu != null)
            {
                _component.Admins.Remove(menu);
                _component.SaveChanges();
            }
            else
            {
                throw new Exception("Id not Found");
            }
            return NoContent();
        }
        private bool AdminExists(int id)
        {
            return _component.Admins.Any(mi => mi.AdminId == id);
        }

        [HttpGet("{email}/{password}")]
        public async Task<IEnumerable<Admin>> Search(string email, string password)
        {
            IQueryable<Admin> query = _component.Admins;

            if (!string.IsNullOrEmpty(email))
            {
                query = query.Where(e => e.AdminEmail.Contains(email)
                           && e.AdminPassword.Contains(password));
                Console.WriteLine("Logged In");
            }


            return await query.ToListAsync();
        }
        [HttpGet("getuser")]
        public async Task<IActionResult> GetUser(string useremail, string password)
        {

            var user = await _component.Admins.FirstOrDefaultAsync(u => u.AdminEmail == useremail);
            if (user == null || !VerifyPasswordHash(user.AdminPassword, password))
            {
                return NotFound("User not found or invalid username/password");
            }
            // You can return user information or any other data you need here
            return Ok("Validone");
        }
        private bool VerifyPasswordHash(string storedHash, string password)
        {
            return storedHash == password;
        }
    }
}
