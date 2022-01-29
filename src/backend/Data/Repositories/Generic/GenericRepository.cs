
using Core.Domain;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Data;
public partial class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : BaseEntity
{
    public readonly DbContext _context;
    public readonly DbSet<TEntity> _dbSet;

    public GenericRepository(DashboardDbContext context)
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
    public TEntity Insert(TEntity entity)
    {
        _dbSet.Add(entity);
        _context.SaveChanges();
        return entity;
    }
    public IEnumerable<TEntity> Insert(IEnumerable<TEntity> entities)
    {
        _dbSet.AddRange(entities);
        _context.SaveChanges();
        return entities;
    }
    public async Task<TEntity> InsertAsync(TEntity entity)
    {
        await _dbSet.AddAsync(entity);
        await _context.SaveChangesAsync();
        return entity;
    }
    public async Task<IEnumerable<TEntity>> InsertAsync(IEnumerable<TEntity> entities)
    {
        await _dbSet.AddRangeAsync(entities);
        await _context.SaveChangesAsync();
        return entities;
    }
    public TEntity Update(TEntity entity)
    {
        _dbSet.Update(entity);
        _context.SaveChanges();
        return entity;
    }
    public async Task<TEntity> UpdateAsync(TEntity entity)
    {
        _dbSet.Update(entity);
        await _context.SaveChangesAsync();
        return entity;
    }
    public IEnumerable<TEntity> Update(IEnumerable<TEntity> entities)
    {
        _dbSet.UpdateRange(entities);
        _context.SaveChanges();
        return entities;
    }
    public async Task<IEnumerable<TEntity>> UpdateAsync(IEnumerable<TEntity> entities)
    {
        _dbSet.UpdateRange(entities);
        await _context.SaveChangesAsync();
        return entities;
    }
    public TEntity Remove(TEntity entity)
    {
        _dbSet.Remove(entity);
        _context.SaveChanges();
        return entity;
    }
    public async Task<TEntity> RemoveAsync(TEntity entity)
    {
        _dbSet.Remove(entity);
        await _context.SaveChangesAsync();
        return entity;
    }
    public IEnumerable<TEntity> Remove(IEnumerable<TEntity> entities)
    {
        _dbSet.RemoveRange(entities);
        _context.SaveChanges();
        return entities;
    }
    public async Task<IEnumerable<TEntity>> RemoveAsync(IEnumerable<TEntity> entities)
    {
        _dbSet.RemoveRange(entities);
        await _context.SaveChangesAsync();
        return entities;
    }

    public IQueryable<TEntity> Table => _dbSet;
}