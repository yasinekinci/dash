using Domain;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Data;
public partial class Repository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
{
    public readonly DbContext _context;
    public readonly DbSet<TEntity> _dbSet;

    public Repository(DashboardDbContext context)
    {
        _context = context;
        _dbSet = context.Set<TEntity>();
    }

    public TEntity Get(Expression<Func<TEntity, bool>> filter)
    {
        return _dbSet.SingleOrDefault(filter);
    }
    public async Task<TEntity> GetAsync(Expression<Func<TEntity, bool>> filter)
    {
        return await _dbSet.SingleOrDefaultAsync(filter);
    }
    public IQueryable<TEntity> GetAll(Expression<Func<TEntity, bool>> filter = null)
    {
        if (filter == null)
        {
            return _dbSet.AsNoTracking().AsQueryable();
        }

        return _dbSet.Where(filter).AsNoTracking().AsQueryable();
    }
    public async Task<IEnumerable<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> filter = null)
    {
        if (filter == null)
        {
            return await _dbSet.ToListAsync();
        }
        return await _dbSet.Where(filter).ToListAsync();
    }

    public void Insert(TEntity entity)
    {
        _dbSet.Add(entity);
        _context.SaveChanges();
    }
    public void Insert(IEnumerable<TEntity> entity)
    {
        _dbSet.AddRange(entity);
        _context.SaveChanges();
    }
    public async Task InsertAsync(TEntity entity)
    {
        await _dbSet.AddAsync(entity);
        await _context.SaveChangesAsync();
    }
    public async Task InsertAsync(IEnumerable<TEntity> entity)
    {
        await _dbSet.AddRangeAsync(entity);
        await _context.SaveChangesAsync();
    }

    public void Update(TEntity entity)
    {
        _dbSet.Update(entity);
        _context.SaveChanges();
    }

    public void Update(IEnumerable<TEntity> entity)
    {
        _dbSet.UpdateRange(entity);
        _context.SaveChanges();
    }

    public void Delete(TEntity entity)
    {
        _dbSet.Remove(entity);
        _context.SaveChanges();
    }

    public void Delete(IEnumerable<TEntity> entity)
    {
        _dbSet.RemoveRange(entity);
        _context.SaveChanges();
    }

    public IQueryable<TEntity> Table => _dbSet;
}