using AutoMapper;
using Core.Domain;
using Core.Utilities.Hashing;
using Core.Utilities.Results;
using Core.Utilities.Results.Error;
using Core.Utilities.Security.Jwt;

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

        public IDataResult<UserModel> Login(UserModel user)
        {
            var userToCheck = _userService.Get(x => x.Email == user.Email);
            if (userToCheck == null)
            {
                return new ErrorDataResult<UserModel>("User not fould");
            }

            if (!HashingHelper.VerifyPasswordHash(user.Password, user.PasswordHash, user.PasswordSalt))
            {
                return new ErrorDataResult<UserModel>("Password is incorrect");
            }

            return new SucessDataResult<UserModel>(_mapper.Map<UserModel>(userToCheck), "Login is successful");
        }

        public IDataResult<UserModel> Register(UserModel user, string password)
        {
            if (_userService.Get(c => c.Email == user.Email) == null)
            {
                byte[] passwordHash, passwordSalt;
                HashingHelper.CreatePasswordHash(password, out passwordHash, out passwordSalt);

                var newUser = new User
                {
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email,
                    PasswordHash = passwordHash,
                    PasswordSalt = passwordSalt,
                    Status = true
                };
                var result = _userService.Insert(newUser);

                return new SucessDataResult<UserModel>(_mapper.Map<UserModel>(result), "User created succesful");
            }
            return new ErrorDataResult<UserModel>(user, "The user is already registered.");

        }

        public IResult UserExists(string email)
        {
            if (_userService.Get(c => c.Email == email) != null)
            {
                return new SuccessResult("User already exists");
            }
            return new ErrorResult("User not fould");
        }

        public IDataResult<AccessToken> CreateAccessToken(UserModel user)
        {
            var userInfo = _mapper.Map<User>(user);//user get yapılabilir.
            var claims = _userService.GetClaims(userInfo);
            var accessToken = _tokenHelper.CreateToken(userInfo, claims.ToList());
            return new SucessDataResult<AccessToken>(accessToken, "Access Token Created");
        }
    }
}