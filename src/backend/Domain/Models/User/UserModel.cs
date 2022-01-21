using Domain.Models;

namespace Domain
{
    public class UserModel : BaseModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PasswordSalt { get; set; }
        public string PasswordHash { get; set; }
        public bool Status { get; set; }

        public ICollection<UserOperationClaimModel> UserOperationClaim { get; set; }
    }
}