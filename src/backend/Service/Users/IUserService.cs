using Core.Domain;
using Core.Utilities.Results;

namespace Service;

public interface IUserService : IGenericService<User>
{
    Task<IResult> GetClaimsByUserIdAsync(int userId);
}
