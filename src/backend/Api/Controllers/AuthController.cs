using AutoMapper;
using Core.Domain;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Service;

namespace Api.Controllers
{
    public class AuthController : BaseController
    {
        private readonly ILogger<AuthController> _logger;
        private readonly IUserService _userService;
        private readonly IMapper _mapper;
        public AuthController(ILogger<AuthController> logger, IUserService userService, IMapper mapper)
        {
            _logger = logger;
            _userService = userService;
            _mapper = mapper;
        }

        [HttpPost("GetAll")]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return CreateActionResult<IEnumerable<UserModel>>(_mapper.Map<IEnumerable<UserModel>>(users));
        }

        [HttpPost("GetAllAsync")]
        public async Task<IActionResult> GetAllAsync()
        {
            var users = await _userService.GetAllAsync();
            return CreateActionResult<IEnumerable<UserModel>>(_mapper.Map<IEnumerable<UserModel>>(users));
        }
     
    }
}