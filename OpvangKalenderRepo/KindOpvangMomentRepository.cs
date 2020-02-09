using OpvangKalender.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpvangKalender.Repo
{
    public class KindOpvangMomentRepository:GenericRepository<KindOpvangMoment>
    {
        public KindOpvangMomentRepository (OpvangContext context)
    : base(context)
        { }

    }
}
