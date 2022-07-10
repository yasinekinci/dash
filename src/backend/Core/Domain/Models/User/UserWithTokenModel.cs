using Core.Utilities.Security.Jwt;

namespace Core.Domain
{
    public class UserWithTokenModel
    {
        public UserModel User { get; set; }
        public AccessToken Token { get; set; }
    }
}