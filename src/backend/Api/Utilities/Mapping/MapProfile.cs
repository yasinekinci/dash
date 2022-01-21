using AutoMapper;
using Core.Domain;
using Domain;
using Domain.Models;

namespace Api.Utilities.Mapping
{
    public class MapProfile : Profile
    {
        public MapProfile()
        {
            CreateMap<User, UserModel>().ReverseMap();
            CreateMap<OperationClaim, OperationClaimModel>().ReverseMap();
            CreateMap<UserOperationClaim, UserOperationClaimModel>().ReverseMap();
        }
    }
}