using Domain.Entites;
namespace Data.Repositories
{
    public class SupplierRepository : GenericRepository<Supplier>, ISupplierRepository
    {
        public SupplierRepository(DashboardDbContext context) : base(context)
        {
        }
    }
}