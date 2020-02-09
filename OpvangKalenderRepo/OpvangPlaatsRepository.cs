using OpvangKalender.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpvangKalender.Repo
{
    public class OpvangPlaatsRepository:GenericRepository<OpvangPlaats>
    {
        public OpvangPlaatsRepository(OpvangContext context)
    : base(context)
        { }

    }
}
