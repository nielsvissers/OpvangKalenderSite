using OpvangKalenderCore.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpvangKalenderCore.API.Repositories
{
    public class OpvangContactRepository:GenericRepository<OpvangContact>
    {
        public OpvangContactRepository(OpvangContext context)
    : base(context)
        { }

    }
}
