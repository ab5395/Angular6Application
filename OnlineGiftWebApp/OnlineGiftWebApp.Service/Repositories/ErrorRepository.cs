

namespace OnlineGiftWebApp.Service.Repositories
{
    using OnlineGiftWebApp.Data;
    using OnlineGiftWebApp.Service.Interfaces;
    using OnlineGiftWebApp.Services.Repositories;
    using System;
    using System.Threading.Tasks;

    public class ErrorRepository : Repository<ErrorLog>, IErrorRepository
    {
        private readonly ApplicationDbContext _db;
        public ErrorRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void AddErrorLog(Exception ex)
        {
            var errorlog = new ErrorLog
            {
                InnerMessage = ex.InnerException?.Message,
                LogDate = DateTime.UtcNow,
                Message = ex.Message,
                Source = ex.Source,
                StackTrace = ex.StackTrace,
                TargetSite = ex.TargetSite.Name,
                Type = ex.GetType().ToString()
            };
            Add(errorlog);
            Save();
        }
    }
}
