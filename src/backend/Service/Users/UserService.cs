using Data;
using Domain;

namespace Service;

public class UserService : Service<User>, IUserService
{
    public UserService(IRepository<User> repository) : base(repository)
    {
    }
}
