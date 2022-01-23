using Microsoft.AspNetCore.Mvc;
using Service;

namespace Api.Controllers
{
    public class SuppliersController : BaseController
    {
        private readonly ISupplierService _supplierService;
        public SuppliersController(ISupplierService supplierService)
        {
            _supplierService = supplierService;
        }

        [HttpPost]
        public async Task<IActionResult> GetAllSupplier()
        {
            return Ok(await _supplierService.GetAllAsync());
        }
    }
}