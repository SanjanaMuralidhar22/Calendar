using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MeetingManagement.Models
{
    [Table("MeetingMeet")]
    public class Meeting
    {
        [Key]
        public int MeetingId { get; set; }
        [Required]
        public string MeetingDetails { get; set; } = string.Empty;
        [Required]
        [DataType(DataType.Date)]
        public DateTime StartDate { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime EndDate { get; set; }
        [Required]
        [DataType(DataType.Time)]
        public DateTime StartTime { get; set; }
        [Required]
        [DataType(DataType.Time)]
        public DateTime EndTime { get; set; }
        [ForeignKey(nameof(EmployeeId))]
        public int EmployeeId { get; set; }
        [ForeignKey(nameof(RoomId))]
        public int? RoomId { get; set; }


    }

}
