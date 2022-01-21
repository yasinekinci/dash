using AutoMapper;
using Domain;
using Domain.Entites;
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