using System.Reflection;
using Autofac;
using Core.Utilities.Security.Jwt;
using Data;
using Service;
using Module = Autofac.Module;

namespace Api.Modules
{
    public class RepoServiceModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {

            builder.RegisterGeneric(typeof(GenericRepository<>)).As(typeof(IGenericRepository<>)).InstancePerLifetimeScope();
            builder.RegisterGeneric(typeof(GenericService<>)).As(typeof(IGenericService<>)).InstancePerLifetimeScope();

            builder.RegisterType<JwtTokenHelper>().As<ITokenHelper>();

            var apiAssembly = Assembly.GetExecutingAssembly();
            var repoAssembly = Assembly.GetAssembly(typeof(DashboardDbContext));
            var serviceAssembly = Assembly.GetAssembly(typeof(GenericService<>));

            builder.RegisterAssemblyTypes(apiAssembly, repoAssembly, serviceAssembly)
            .Where(x => x.Name.EndsWith("Repository")).AsImplementedInterfaces().InstancePerLifetimeScope();

            builder.RegisterAssemblyTypes(apiAssembly, repoAssembly, serviceAssembly)
           .Where(x => x.Name.EndsWith("Service")).AsImplementedInterfaces().InstancePerLifetimeScope();

        }
    }
}