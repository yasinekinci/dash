using Core.Domain;
using Core.Utilities.Results;

namespace Service;

public interface IUserService : IGenericService<User>
{
    IEnumerable<OperationClaim> GetClaims(User user);
}
