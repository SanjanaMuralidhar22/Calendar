using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MeetingManagement.Models
{
    [Table("TimeList")]
    public class TimeList
    {
        [Key]
        public int TimeId { get; set; }
        [Required]
        public string Time { get; set; } = string.Empty;
    }
}
    
