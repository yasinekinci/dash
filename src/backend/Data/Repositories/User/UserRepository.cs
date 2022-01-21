using Domain;
using Microsoft.EntityFrameworkCore;

namespace Data.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(DashboardDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<User>> GetUserAllWithOperationClaimsAsync()
        {
            return await _dbSet.Include(x => x.UserOperationClaim).AsNoTracking().ToListAsync();
        }
    }
}