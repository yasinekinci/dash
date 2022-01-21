using Core.Utilities.Results;
using Domain;

namespace Service;

public interface IUserService : IService<User>
{
    Task<IResult> GetClaimsByUserIdAsync(int userId);
}
