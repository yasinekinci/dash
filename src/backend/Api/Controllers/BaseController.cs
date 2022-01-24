using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Core.Utilities.Results;
namespace Api.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class BaseController : ControllerBase
{
    [ApiExplorerSettings(IgnoreApi = true)]
    public IDataResult<T> CreateActionDataResult<T>(T result, string message, bool success = true) where T : class
    {
        if (success)
        {
            return new SuccessDataResult<T>(result, message);
        }
        return new ErrorDataResult<T>(result, message);
    }

    [ApiExplorerSettings(IgnoreApi = true)]
    public IDataResult<T> CreateActionDataResult<T>(T result, bool success = true) where T : class
    {
        if (success)
        {
            return new SuccessDataResult<T>(result);
        }
        return new ErrorDataResult<T>(result);
    }

    [ApiExplorerSettings(IgnoreApi = true)]
    public Core.Utilities.Results.IResult CreateActionResult(bool success = true)
    {
        if (success)
        {
            return new SuccessResult();
        }
        return new ErrorResult();
    }
}
