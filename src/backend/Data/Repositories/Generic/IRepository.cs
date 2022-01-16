using System.Linq.Expressions;
using Domain;

namespace Data;

public interface IRepository<TEntity> where TEntity : BaseEntity
{
    IQueryable<TEntity> GetAll(Expression<Func<TEntity, bool>> filter = null);
    TEntity Get(Expression<Func<TEntity, bool>> filter);
    Task<IEnumerable<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> filter = null);
    Task<TEntity> GetAsync(Expression<Func<TEntity, bool>> filter);
    void Insert(TEntity entity);
    void Insert(IEnumerable<TEntity> entity);
    Task InsertAsync(TEntity entity);
    Task InsertAsync(IEnumerable<TEntity> entity);
    void Update(TEntity entity);
    void Update(IEnumerable<TEntity> entity);
    void Delete(TEntity entity);
    void Delete(IEnumerable<TEntity> entity);
    IQueryable<TEntity> Table { get; }
}