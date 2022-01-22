using Core.Domain;
using Core.Utilities.Results;
using Core.Utilities.Security.Jwt;
using Domain.Models.Users;

namespace Service
{
    public interface IAuthService
    {
        IDataResult<UserModel> Register(UserForRegisterModel user);
        IDataResult<UserModel> Login(UserForLoginModel user);
        IResult UserExists(string email);
        IDataResult<AccessToken> CreateAccessToken(UserModel user);
    }
}