using Core.Utilities.Results;
using Domain;

namespace Service;

public interface IUserService : IGenericService<User>
{
    Task<IResult> GetClaimsByUserIdAsync(int userId);
}
