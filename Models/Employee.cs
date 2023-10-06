using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MeetingManagement.Models
{
    [Table("MeetingEmployeee")]
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; } = string.Empty;
        public string EmployeeEmail { get; set; } = string.Empty;
        public string EmployeePassword { get; set; } = string.Empty;
        public long EmployeePhone { get; set; }
        [ForeignKey(nameof(AdminID))]
        public int AdminID { get; set; }
        //public virtual Admin? Admin { get; set; }
    }
}
