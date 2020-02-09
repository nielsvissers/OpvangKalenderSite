using OpvangKalender.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpvangKalender.Repo
{
    public class KindRepository:GenericRepository<Kind>
    {
        public KindRepository(OpvangContext context)
    : base(context)
        { }

    }
}
