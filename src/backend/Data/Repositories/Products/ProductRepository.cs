using Domain.Entites;
namespace Data.Repositories
{
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        public ProductRepository(DashboardDbContext context) : base(context)
        {
        }
    }
}