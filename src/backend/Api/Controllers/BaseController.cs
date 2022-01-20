using System.Net;
using Domain;
using Domain.Models.Response;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class BaseController : ControllerBase
{
    public IActionResult CreateActionResult<T>(T result, HttpStatusCode statusCode = HttpStatusCode.OK) where T : class
    {
        switch (statusCode)
        {
            case HttpStatusCode.BadRequest:
                return BadRequest(ResponseModel<T>.Success(result, statusCode));

            default:
                return Ok(ResponseModel<T>.Success(result, statusCode));
        }
    }

}
