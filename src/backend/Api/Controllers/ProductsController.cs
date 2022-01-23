
using Microsoft.AspNetCore.Mvc;
using Service;

namespace Api.Controllers
{
    public class ProductsController : BaseController
    {
        private readonly IProductService _productService;
        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpPost]
        public async Task<IActionResult> GetAllProduct()
        {
            return Ok(await _productService.GetAllAsync());
        }

    }
}