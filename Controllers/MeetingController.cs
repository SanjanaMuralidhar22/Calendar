using MeetingManagement.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MeetingManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeetingController : ControllerBase
    {
        private readonly MeetingRoomDbcontext _component;
        public MeetingController(MeetingRoomDbcontext _component)
        {
            this._component = _component;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Meeting>>> GetAllMeeting()
        {
            var meeting = await _component.Meetings.ToListAsync();
            return Ok(meeting);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Meeting>> GetMeetingById(int id)
        {
            var select = await _component.Meetings.FindAsync(id);
            return Ok(select);
        }
        [HttpPost]
        public async Task<ActionResult<Meeting>> AddFooditem(Meeting meet)
        {
            _component.Meetings.Add(meet);
            await _component.SaveChangesAsync();
            return meet;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMenu(int id, Meeting meet)
        {
            var men = await _component.Meetings.FindAsync(id);
            if (men == null)
            {
                throw new Exception("Meeting Details not found to update");
            }
            else
            {
                men.MeetingDetails = meet.MeetingDetails;
                men.StartDate = meet.StartDate;
                men.EndDate = meet.EndDate;
                men.StartTime = meet.StartTime;
                men.EndTime = meet.EndTime;
                men.RoomId = meet.RoomId;
                men.EmployeeId = meet.EmployeeId;
                await _component.SaveChangesAsync();
                return Ok(men);
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMenu(int id)
        {
            var menu = await _component.Meetings.FindAsync(id);
            if (menu != null)
            {
                _component.Meetings.Remove(menu);
                _component.SaveChanges();
            }
            else
            {
                throw new Exception("Meeting not Found");
            }
            return NoContent();
        }
        /*[HttpGet("{id}")]
        public async Task<ActionResult<Meeting>> GetMeetingByEmpd(int id)
        {
            var select = await _component.Employees.FindAsync(id);
            return Ok(select);
        }*/
        private bool MeetingExists(int id)
        {
            return _component.Meetings.Any(mi => mi.MeetingId == id);
        }
    }
}
