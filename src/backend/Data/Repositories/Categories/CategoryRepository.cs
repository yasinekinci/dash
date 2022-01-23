using Domain.Entites;

namespace Data.Repositories
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(DashboardDbContext context) : base(context)
        {
        }
    }
}