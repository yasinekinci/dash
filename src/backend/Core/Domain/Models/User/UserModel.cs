
namespace Core.Domain;

public class UserModel : BaseModel
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public byte[] PasswordSalt { get; set; }
    public byte[] PasswordHash { get; set; }
    public bool Status { get; set; }

    public ICollection<UserOperationClaimModel> UserOperationClaim { get; set; }
}
