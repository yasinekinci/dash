
using AutoMapper;
using Domain.Entites;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Service;

namespace Api.Controllers
{
    public class ProductsController : BaseController
    {
        private readonly IMapper _mapper;
        private readonly IProductService _productService;
        public ProductsController(IProductService productService, IMapper mapper)
        {
            _productService = productService;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> GetAllProduct()
        {
            return Ok(await _productService.GetAllAsync());
        }

        [HttpPost("Add")]
        public async Task<IActionResult> Add(ProductModel productModel)
        {
            var entity = _mapper.Map<Product>(productModel);
            var result = await _productService.InsertAsync(entity);
            var model = _mapper.Map<ProductModel>(result);
            return Created(string.Empty, CreateActionDataResult(model, "Product added."));
        }

    }
}