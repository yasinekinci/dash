using Domain.Entites;

namespace Data.Repositories
{
    public class CategoryRepository : GenericRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(DashboardDbContext context) : base(context)
        {
        }
    }
}