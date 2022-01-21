using Domain;

namespace Data.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        Task<IEnumerable<User>> GetUserAllWithOperationClaimsAsync();
    }
}