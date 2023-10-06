using MeetingManagement.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace MeetingManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Room_controller : ControllerBase
    {
        private readonly MeetingRoomDbcontext _component;
        public Room_controller(MeetingRoomDbcontext _component)
        {
            this._component = _component;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Room>>> GetAllRoom()
        {
            var room = await _component.Rooms.ToListAsync();
            return Ok(room);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Room>> GetByRoomId(int id)
        {
            var select = await _component.Rooms.FindAsync(id);
            return Ok(select);
        }
        [HttpPost]
        public async Task<ActionResult<Room>> AddFooditem(Room meet)
        {
            _component.Rooms.Add(meet);
            await _component.SaveChangesAsync();
            return meet;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMenu(int id, Room meet)
        {
            var men = await _component.Rooms.FindAsync(id);
            if (men == null)
            {
                throw new Exception("Room Details not found to update");
            }
            else
            {
                men.RoomCapacity = meet.RoomCapacity;
                men.RoomLocation = meet.RoomLocation;
                men.RoomName = meet.RoomName;
                await _component.SaveChangesAsync();
                return Ok(men);
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMenu(int id)
        {
            var menu = await _component.Rooms.FindAsync(id);
            if (menu != null)
            {
                _component.Rooms.Remove(menu);
                _component.SaveChanges();
            }
            else
            {
                throw new Exception("Room not Found");
            }
            return NoContent();
        }
        private bool RoomExists(int id)
        {
            return _component.Rooms.Any(mi => mi.RoomId == id);
        }
    }
}
