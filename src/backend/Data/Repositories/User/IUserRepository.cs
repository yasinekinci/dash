using Core.Domain;

namespace Data.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        Task<IEnumerable<User>> GetUserAllWithOperationClaimsAsync();
        Task<IEnumerable<OperationClaim>> GetClaimsByUserIdAsync(int userId);
    }
}