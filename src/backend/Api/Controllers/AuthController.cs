using AutoMapper;
using Core.Domain;
using Domain;
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

        [HttpPost("Login")]
        public IActionResult Login(UserModel user)
        {
            var userToLogin = _authService.Login(user);
            if (!userToLogin.Success)
            {
                return BadRequest(userToLogin);
            }
            var token = _authService.CreateAccessToken(userToLogin.Data);
            if (token.Success)
            {
                return Ok(token);
            }
            return BadRequest(token);
        }

        [HttpPost("Register")]
        public IActionResult Register(UserModel user)
        {
            var register = _authService.Register(user);
            if (register.Success)
            {
                return BadRequest(register);
            }
            var result = _authService.CreateAccessToken(register.Data);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

    }
}