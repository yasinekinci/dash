using AutoMapper;
using Core.Domain;
using Core.Utilities.Results;
using Data;
using Data.Repositories;

namespace Service;

public class UserService : GenericService<User>, IUserService
{
    private readonly IUserRepository _userProductRespository;
    private readonly IMapper _mapper;
    public UserService(IUserRepository repository, IMapper mapper) : base(repository)
    {
        _userProductRespository = repository;
        _mapper = mapper;
    }

    /// <summary>
    /// Get Claims By User Id Async
    /// </summary>
    /// <param name="userId"></param>
    /// <returns></returns>
    public IEnumerable<OperationClaim> GetClaims(User user)
    {
        var users = _userProductRespository.GetClaims(user);
        return users;
    }
}
