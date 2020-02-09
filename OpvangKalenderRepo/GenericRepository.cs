using Microsoft.EntityFrameworkCore;
using OpvangKalender.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace OpvangKalender.Repo
{
    public abstract class GenericRepository<T> : IDisposable where T : Entiteit
    {
        private Boolean isDisposed;
        private readonly DbContext _context;
        private readonly DbSet<T> _dbSet;

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        private void Dispose(Boolean b)
        {
            if (!isDisposed)
            {
                _context.Dispose();
                isDisposed = true;
            }
        }
        public GenericRepository(DbContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }
        public virtual T GetById(int id, List<string> includelist = null)
        {
            DbSet<T> query = _context.Set<T>();
            
            if (includelist is object)
            {
                includelist.ForEach(x => query.Include(x));
            }

            return query.AsNoTracking().FirstOrDefault(x => x.Id == id);
        }
        public virtual void Delete(T t)
        {
            if (_context.Entry(t).State == EntityState.Detached)
            {
                _dbSet.Attach(t);
            }
            _dbSet.Remove(t);
        }
        public virtual void Delete(int id)
        {
            Delete(_dbSet.Find(id));
        }
        public virtual void Delete(IEnumerable<T> lst)
        {
            foreach (var item in lst)
            {
                Delete(item);
            }
        }
        public virtual void Update(T t)
        {
            if (_context.Entry(t).State == EntityState.Detached)
            {
                _dbSet.Attach(t);
            }
            _context.Entry(t).State = EntityState.Modified;
        }
        public virtual void Update(IEnumerable<T> lst)
        {
            foreach (var item in lst)
            {
                Update(item);
            }
        }
        public virtual void Create(T t)
        {
            _dbSet.Add(t);
        }
        public virtual void Create(IEnumerable<T> lst)
        {
            foreach (var item in lst)
            {
                Create(item);
            }
        }
        public virtual void Save()
        {
            _context.SaveChanges();
        }
        public virtual async Task<int> SaveAsync()
        {
            return await _context.SaveChangesAsync();
        }
        public virtual IEnumerable<T> GetAll(List<string> includelist = null)
        {
            DbSet<T> query = _context.Set<T>();
            IQueryable<T> qry=query.AsQueryable();
            try
            {


            if (includelist is object)
            {
                includelist.ForEach(x => qry=qry.Include(x));
                }
            }
            catch (Exception)
            {

                throw;
            }

            return qry.AsNoTracking().ToList();
        }
        public virtual DbSet<T> GetDbSet()
        {
            return _dbSet;
        }
        public virtual DbContext GetDbContext()
        {
            return _context;
        }
        public virtual IQueryable<T> GetQueryable()
        {
            return _dbSet.AsNoTracking().AsQueryable();
        }
    }
}
