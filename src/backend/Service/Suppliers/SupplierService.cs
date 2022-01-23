using Data;
using Domain.Entites;
using Data.Repositories;

namespace Service
{
    public class SupplierService : GenericService<Supplier>, ISupplierService
    {
        private readonly ISupplierRepository _supplierRepository;
        public SupplierService(ISupplierRepository supplierRepository) : base(supplierRepository)
        {
            _supplierRepository = supplierRepository;
        }
    }
}