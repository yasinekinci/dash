using Core.Domain;
using Core.Utilities.Results;
using Core.Utilities.Security.Jwt;

namespace Service
{
    public interface IAuthService
    {
        IDataResult<UserModel> Register(UserModel user, string password);
        IDataResult<UserModel> Login(UserModel user);
        IResult UserExists(string email);
        IDataResult<AccessToken> CreateAccessToken(UserModel user);
    }
}