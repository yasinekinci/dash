
using Core.Domain;
using Data;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Service;

public class GenericService<TEntity> : IGenericService<TEntity> where TEntity : BaseEntity, new()
{
    protected IGenericRepository<TEntity> _repository;
    public GenericService(IGenericRepository<TEntity> repository)
    {
        _repository = repository;
    }

    public TEntity Get(Expression<Func<TEntity, bool>> filter)
    {
        return _repository.Get(filter);
    }

    public async Task<TEntity> GetAsync(Expression<Func<TEntity, bool>> filter)
    {
        return await _repository.GetAsync(filter);
    }

    public IQueryable<TEntity> GetAll(Expression<Func<TEntity, bool>> filter = null)
    {
        return _repository.GetAll(filter);
    }

    public async Task<IEnumerable<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> filter = null)
    {
        return await _repository.GetAllAsync(filter);
    }

    public TEntity Insert(TEntity entity)
    {
        return _repository.Insert(entity);
    }

    public IEnumerable<TEntity> Insert(IEnumerable<TEntity> entities)
    {
        _repository.Insert(entities);
        return entities;
    }

    public async Task<TEntity> InsertAsync(TEntity entity)
    {
        await _repository.InsertAsync(entity);
        return entity;
    }

    public async Task<IEnumerable<TEntity>> InsertAsync(IEnumerable<TEntity> entities)
    {
        await _repository.InsertAsync(entities);
        return entities;
    }

    public TEntity Update(TEntity entity)
    {
        return _repository.Update(entity);
    }

    public IEnumerable<TEntity> Update(IEnumerable<TEntity> entities)
    {
        return _repository.Update(entities);
    }

    public TEntity Remove(TEntity entity)
    {
        return _repository.Remove(entity);
    }

    public IEnumerable<TEntity> Remove(IEnumerable<TEntity> entity)
    {
        return _repository.Remove(entity);
    }

    public TEntity GetById(int Id)
    {
        return Get(x => x.Id == Id);
    }

    public Task<TEntity> GetByIdAsync(int Id)
    {
        return GetAsync(x => x.Id == Id);
    }
    public Task<TEntity> UpdateAsync(TEntity entity)
    {
        return _repository.UpdateAsync(entity);
    }
    public Task<IEnumerable<TEntity>> UpdateAsync(IEnumerable<TEntity> entities)
    {
        return _repository.UpdateAsync(entities);
    }
    public Task<TEntity> RemoveAsync(TEntity entity)
    {
        return _repository.RemoveAsync(entity);
    }
    public Task<IEnumerable<TEntity>> RemoveAsync(IEnumerable<TEntity> entity)
    {
        return _repository.RemoveAsync(entity);
    }
}

