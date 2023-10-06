using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MeetingManagement.Models
{
    [Table("MeetingRoom")]
    public class Room
    {
        [Key]
        public int RoomId { get; set; }
        [Required]
        public string RoomName { get; set; } = string.Empty;
        [Required]
        public int RoomCapacity { get; set; }
        [Required]
        public string RoomLocation { get; set; } = string.Empty;
    }
}
