using AutoMapper;
using Core.Domain;
using Domain.Entites;
using Domain.Models;

namespace Api.Utilities.Mapping
{
    public class MapProfile : Profile
    {
        public MapProfile()
        {
            CreateMap<User, UserModel>()
            .ForMember(x => x.PasswordSalt, opt => opt.Ignore())
            .ForMember(x => x.PasswordHash, opt => opt.Ignore())
            .ForMember(x => x.Password, opt => opt.Ignore())
            .ReverseMap();
            CreateMap<OperationClaim, OperationClaimModel>().ReverseMap();
            CreateMap<UserOperationClaim, UserOperationClaimModel>().ReverseMap();
            CreateMap<Product, ProductModel>().ReverseMap();
            CreateMap<Category, CategoryModel>().ReverseMap();
            CreateMap<Supplier, SupplierModel>().ReverseMap();
        }
    }
}