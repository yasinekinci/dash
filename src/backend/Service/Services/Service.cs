
using Data;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Service;

public class Service<TEntity> : IService<TEntity> where TEntity : BaseEntity, new()
{
    protected IRepository<TEntity> _repository;
    public Service(IRepository<TEntity> repository)
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

    public IEnumerable<TEntity> GetAll(Expression<Func<TEntity, bool>> filter = null)
    {
        return _repository.GetAll(filter);
    }

    public async Task<IEnumerable<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> filter = null)
    {
        return await _repository.GetAllAsync(filter);
    }

    public void Insert(TEntity entity)
    {
        _repository.Insert(entity);
    }

    public void Insert(IEnumerable<TEntity> entity)
    {
        _repository.Insert(entity);
    }

    public async Task InsertAsync(TEntity entity)
    {
        await _repository.InsertAsync(entity);
    }

    public async Task InsertAsync(IEnumerable<TEntity> entity)
    {
        await _repository.InsertAsync(entity);
    }

    public void Update(TEntity entity)
    {
        _repository.Update(entity);
    }

    public void Update(IEnumerable<TEntity> entity)
    {
        _repository.Update(entity);
    }

    public void Delete(TEntity entity)
    {
        _repository.Delete(entity);
    }

    public void Delete(IEnumerable<TEntity> entity)
    {
        _repository.Delete(entity);
    }

    public TEntity GetById(int Id)
    {
        return Get(x => x.Id == Id);
    }

    public Task<TEntity> GetByIdAsync(int Id)
    {
        return GetAsync(x => x.Id == Id);
    }
}

