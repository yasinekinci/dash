using Domain;

namespace Service;

public interface IUserService : IService<User>
{
    Task<IEnumerable<User>> GetUserAllWithOperationClaimsAsync();
}
