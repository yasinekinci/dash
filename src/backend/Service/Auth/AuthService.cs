using AutoMapper;
using Core.Domain;
using Core.Utilities.Hashing;
using Core.Utilities.Results;
using Core.Utilities.Security.Jwt;
using Domain.Models.Users;

namespace Service
{
    public class AuthService : IAuthService
    {
        private readonly IUserService _userService;
        private readonly ITokenHelper _tokenHelper;
        private readonly IMapper _mapper;
        public AuthService(IUserService userService, ITokenHelper tokenHelper, IMapper mapper)
        {
            _userService = userService;
            _tokenHelper = tokenHelper;
            _mapper = mapper;
        }

        public IDataResult<UserModel> Login(UserForLoginModel userForLoginModel)
        {
            var userToCheck = _userService.Get(x => x.Email == userForLoginModel.Email);
            if (userToCheck == null)
            {
                return new ErrorDataResult<UserModel>("User not fould");
            }

            if (!HashingHelper.VerifyPasswordHash(userForLoginModel.Password, userToCheck.PasswordHash, userToCheck.PasswordSalt))
            {
                return new ErrorDataResult<UserModel>("Password is incorrect");
            }

            return new SuccessDataResult<UserModel>(_mapper.Map<UserModel>(userToCheck), "Login is successful");
        }

        public IDataResult<UserModel> Register(UserForRegisterModel userForRegisterModel)
        {
            byte[] passwordHash, passwordSalt;
            HashingHelper.CreatePasswordHash(userForRegisterModel.Password, out passwordHash, out passwordSalt);

            var newUser = new User
            {
                FirstName = userForRegisterModel.FirstName,
                LastName = userForRegisterModel.LastName,
                Email = userForRegisterModel.Email,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                Status = true
            };
            var result = _userService.Insert(newUser);

            return new SuccessDataResult<UserModel>(_mapper.Map<UserModel>(result), "User created succesful");
        }

        public IResult UserExists(string email)
        {
            if (_userService.Get(c => c.Email == email) != null)
            {
                return new ErrorResult("User already exists");
            }
            return new SuccessResult("User not fould");
        }

        public IDataResult<AccessToken> CreateAccessToken(UserModel user)
        {
            var userInfo = _mapper.Map<User>(user);
            var claims = _userService.GetClaims(userInfo);
            var accessToken = _tokenHelper.CreateToken(userInfo, claims.ToList());
            return new SuccessDataResult<AccessToken>(accessToken, "Access Token Created");
        }
    }
}