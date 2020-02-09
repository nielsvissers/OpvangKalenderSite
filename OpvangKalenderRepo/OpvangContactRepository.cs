using OpvangKalender.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpvangKalender.Repo
{
    public class OpvangContactRepository:GenericRepository<OpvangContact>
    {
        public OpvangContactRepository(OpvangContext context)
    : base(context)
        { }

    }
}
