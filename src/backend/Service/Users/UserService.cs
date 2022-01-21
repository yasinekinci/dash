using AutoMapper;
using Core.Utilities.Results;
using Data;
using Data.Repositories;
using Domain;

namespace Service;

public class UserService : Service<User>, IUserService
{
    private readonly IUserRepository _userProductRespository;
    private readonly IMapper _mapper;
    public UserService(IUserRepository repository, IMapper mapper) : base(repository)
    {
        _userProductRespository = repository;
        _mapper = mapper;
    }

    public async Task<IResult> GetUserAllWithOperationClaimsAsync()
    {
        var users = await _userProductRespository.GetUserAllWithOperationClaimsAsync();
        return new SucessDataResult<IEnumerable<UserModel>>(_mapper.Map<IEnumerable<UserModel>>(users));
    }
}
