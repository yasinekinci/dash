using Core.Utilities.Results;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Api.Filters
{
    public class ValideFilterAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                var errors = context.ModelState.Values.SelectMany(x => x.Errors).Select(x => x.ErrorMessage).ToList();
                context.Result = new BadRequestObjectResult(new ErrorResult(errors.Aggregate((i, j) => i + ',' + j)));
            }
        }
    }
}