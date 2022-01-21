using Data;
using Data.Repositories;
using Domain;

namespace Service;

public class UserService : Service<User>, IUserService
{
    private readonly IUserRepository _userProductRespository;
    public UserService(IUserRepository repository) : base(repository)
    {
        _userProductRespository = repository;
    }

    public async Task<IEnumerable<User>> GetUserAllWithOperationClaimsAsync()
    {
        return await _userProductRespository.GetUserAllWithOperationClaimsAsync();
    }
}
