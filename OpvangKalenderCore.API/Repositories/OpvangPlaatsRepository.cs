using OpvangKalenderCore.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpvangKalenderCore.API.Repositories
{
    public class OpvangPlaatsRepository:GenericRepository<OpvangPlaats>
    {
        public OpvangPlaatsRepository(OpvangContext context)
    : base(context)
        { }

    }
}
