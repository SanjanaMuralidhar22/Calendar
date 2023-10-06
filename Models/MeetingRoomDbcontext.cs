using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace MeetingManagement.Models
{
    public class MeetingRoomDbcontext : DbContext
    {
        public MeetingRoomDbcontext(DbContextOptions<MeetingRoomDbcontext> options) : base(options) { }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Meeting> Meetings { get; set; }

        public DbSet<TimeList> TimeLists { get; set; }
    }
}
