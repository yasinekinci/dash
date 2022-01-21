using Domain;
using Microsoft.EntityFrameworkCore;

namespace Data.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(DashboardDbContext context) : base(context)
        {
        }
    }
}