using Core.Domain;

namespace Data.Repositories
{
    public interface IUserRepository : IGenericRepository<User>
    {
        Task<IEnumerable<User>> GetUserAllWithOperationClaimsAsync();
        IEnumerable<OperationClaim> GetClaims(User user);
    }
}