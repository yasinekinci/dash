using System.Linq.Expressions;
using Core.Domain;
namespace Data;

public interface IGenericRepository<TEntity> where TEntity : BaseEntity
{
    IQueryable<TEntity> GetAll(Expression<Func<TEntity, bool>> filter = null);
    TEntity Get(Expression<Func<TEntity, bool>> filter);
    Task<IEnumerable<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> filter = null);
    Task<TEntity> GetAsync(Expression<Func<TEntity, bool>> filter);
    TEntity Insert(TEntity entity);
    IEnumerable<TEntity> Insert(IEnumerable<TEntity> entity);
    Task<TEntity> InsertAsync(TEntity entity);
    Task<IEnumerable<TEntity>> InsertAsync(IEnumerable<TEntity> entity);
    TEntity Update(TEntity entity);
    Task<TEntity> UpdateAsync(TEntity entity);
    IEnumerable<TEntity> Update(IEnumerable<TEntity> entity);
    Task<IEnumerable<TEntity>> UpdateAsync(IEnumerable<TEntity> entity);
    TEntity Remove(TEntity entity);
    Task<TEntity> RemoveAsync(TEntity entity);
    IEnumerable<TEntity> Remove(IEnumerable<TEntity> entity);
    Task<IEnumerable<TEntity>> RemoveAsync(IEnumerable<TEntity> entity);
    IQueryable<TEntity> Table { get; }
}