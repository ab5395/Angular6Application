
namespace OnlineGiftWebApp.Service.Interfaces
{
    using OnlineGiftWebApp.Data;
    using OnlineGiftWebApp.Services.Interfaces;
    using System;
    using System.Threading.Tasks;

    public interface IErrorRepository : IRepository<ErrorLog>
    {
        void AddErrorLog(Exception ex);
    }
}
