using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Data;
public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<DashboardDbContext>
{
    public DashboardDbContext CreateDbContext(string[] args)
    {
        var builder = new DbContextOptionsBuilder<DashboardDbContext>();
        builder.UseSqlServer(@"SqlConStr");
        return new DashboardDbContext(builder.Options);
    }
}