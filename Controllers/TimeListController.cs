using MeetingManagement.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MeetingManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimeListController : ControllerBase
    {
        private readonly MeetingRoomDbcontext _component;
        public TimeListController(MeetingRoomDbcontext _component)
        {
            this._component = _component;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TimeList>>> GetAll()
        {
            var room = await _component.TimeLists.ToListAsync();
            return Ok(room);
        }

        [HttpPost]
        public async Task<ActionResult<TimeList>> AddTimeList(TimeList timel)
        {
            _component.TimeLists.Add(timel);
            await _component.SaveChangesAsync();
            return timel;
        }
    }
}
