using Domain.Entites;
namespace Data.Repositories
{
    public class SupplierRepository : Repository<Supplier>, ISupplierRepository
    {
        public SupplierRepository(DashboardDbContext context) : base(context)
        {
        }
    }
}