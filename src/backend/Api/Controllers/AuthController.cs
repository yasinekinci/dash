using AutoMapper;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Service;

namespace Api.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
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

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(_mapper.Map<IEnumerable<UserModel>>(users));
        }
    }
}