using Domain.Entites;
namespace Data.Repositories
{
    public class ProductRepository : GenericRepository<Product>, IProductRepository
    {
        public ProductRepository(DashboardDbContext context) : base(context)
        {
        }
    }
}