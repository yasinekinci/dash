using AutoMapper;
using Core.Utilities.Results;
using Data;
using Data.Repositories;
using Domain;
using Domain.Models;

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
    public async Task<IResult> GetClaimsByUserIdAsync(int userId)
    {
        var users = await _userProductRespository.GetClaimsByUserIdAsync(userId);
        return new SucessDataResult<IEnumerable<OperationClaimModel>>(_mapper.Map<IEnumerable<OperationClaimModel>>(users));
    }
}
