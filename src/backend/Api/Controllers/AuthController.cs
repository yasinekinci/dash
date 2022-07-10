using Core.Domain;
using Domain.Models.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Service;

namespace Api.Controllers
{
    public class AuthController : BaseController
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public IActionResult Login(UserForLoginModel user)
        {
            var userToLogin = _authService.Login(user);
            if (!userToLogin.Success)
            {
                return BadRequest(userToLogin);
            }
            var token = _authService.CreateAccessToken(userToLogin.Data);
            if (token.Success)
            {
                return Ok(CreateActionDataResult(new UserWithTokenModel()
                {
                    User = userToLogin.Data,
                    Token = token.Data
                }));
            }
            return BadRequest(token);
        }

        [AllowAnonymous]
        [HttpPost("Register")]
        public IActionResult Register(UserForRegisterModel userForRegisterModel)
        {
            var userExists = _authService.UserExists(userForRegisterModel.Email);
            if (!userExists.Success)
            {
                return BadRequest(userExists);
            }
            var register = _authService.Register(userForRegisterModel);
            if (!register.Success)
            {
                return BadRequest(register);
            }
            var result = _authService.CreateAccessToken(register.Data);
            if (!result.Success)
            {
                return BadRequest(result);
            }
            return Ok(result);
        }

    }
}