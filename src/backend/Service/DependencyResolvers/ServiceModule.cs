using Core.Utilities.Security.Jwt;
using Data;
using Data.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace Service;

public static class ServiceModule
{
    public static IServiceCollection LoadServiceModule(this IServiceCollection services)
    {
        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped(typeof(IGenericService<>), typeof(GenericService<>));
        services.AddScoped<IUserService, UserService>();
        services.AddScoped<IAuthService, AuthService>();
        services.AddScoped<ITokenHelper,JwtTokenHelper>();
        return services;
    }
}
