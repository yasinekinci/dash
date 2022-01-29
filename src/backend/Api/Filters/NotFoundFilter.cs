using Microsoft.AspNetCore.Mvc.Filters;
using Service;
using Core.Domain;
using Microsoft.AspNetCore.Mvc;
using Core.Utilities.Results;

namespace Api.Filters
{
    public class NotFoundFilter<T> : IAsyncActionFilter where T : BaseEntity
    {
        private readonly IGenericService<T> _genericService;

        public NotFoundFilter(IGenericService<T> genericService)
        {
            _genericService = genericService;
        }

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var idValue = context.ActionArguments.Values.FirstOrDefault();
            if (idValue == null)
            {
                await next.Invoke();
                return;
            }

            var id = (int)idValue;
            var anyEntity = await _genericService.GetAsync(x => x.Id == id);
            if (anyEntity != null)
            {
                await next.Invoke();
                return;
            }

            context.Result = new NotFoundObjectResult(new ErrorResult($"{typeof(T).Name}({id}) not found"));

            return;
        }
    }
}