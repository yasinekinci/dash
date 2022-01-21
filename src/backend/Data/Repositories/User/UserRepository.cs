using Core.Domain;
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

        public async Task<IEnumerable<OperationClaim>> GetClaimsByUserIdAsync(int userId)
        {
            var result = await (from operationClaim in _context.Set<OperationClaim>()
                                join userOperationClaim in _context.Set<UserOperationClaim>()
                                 on operationClaim.Id equals userOperationClaim.OperationClaimId
                                where userOperationClaim.Id == userId
                                select operationClaim).ToListAsync();

            return result;
        }

    }
}