

using System.ComponentModel.DataAnnotations.Schema;

namespace Domain;

public class User : BaseEntity
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string PasswordSalt { get; set; }
    public string PasswordHash { get; set; }
    public bool Status { get; set; }
}