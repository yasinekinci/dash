using Microsoft.AspNetCore.Mvc;
using Service;

namespace Api.Controllers
{
    public class CategoriesController : BaseController
    {
        private readonly ICategoryService _categoryService;
        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpPost]
        public async Task<IActionResult> GetAllCategory()
        {
            return Ok(await _categoryService.GetAllAsync());
        }
    }
}