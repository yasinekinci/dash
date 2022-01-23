using Core.Utilities.Security.Jwt;
using Data;
using Data.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace Service;

public static class ServiceModule
{
    public static IServiceCollection LoadServiceModule(this IServiceCollection services)
    {

        services.AddScoped(typeof(IGenericService<>), typeof(GenericService<>));
        services.AddScoped<IAuthService, AuthService>();
        services.AddScoped<IUserService, UserService>();
        services.AddScoped<ICategoryService, CategoryService>();
        services.AddScoped<IProductService, ProductService>();
        services.AddScoped<ISupplierService, SupplierService>();

        services.AddScoped<ITokenHelper, JwtTokenHelper>();

        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<ICategoryRepository, CategoryRepository>();
        services.AddScoped<IProductRepository, ProductRepository>();
        services.AddScoped<ISupplierRepository, SupplierRepository>();

        return services;
    }
}
