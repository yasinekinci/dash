using Data;
using Data.Repositories;
using Domain;

namespace Service;

public class UserService : Service<User>, IUserService
{
    public UserService(IUserRepository repository) : base(repository)
    {
    }
}
