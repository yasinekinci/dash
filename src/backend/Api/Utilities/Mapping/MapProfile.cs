using AutoMapper;
using Domain;

namespace Api.Utilities.Mapping
{
    public class MapProfile : Profile
    {
        public MapProfile()
        {
            CreateMap<User, UserModel>().ReverseMap();
        }
    }
}