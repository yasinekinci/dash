using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Reflection;
using Domain;

namespace Data
{
    public class DashboardDbContext : DbContext
    {
        public DashboardDbContext(DbContextOptions<DashboardDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var types = Assembly.Load("Domain").GetExportedTypes().Where(x => x.IsClass && x.BaseType == typeof(BaseEntity));

            foreach (var type in types)
            {
                modelBuilder.Entity(type);
            }

            base.OnModelCreating(modelBuilder);
        }
    }
}
