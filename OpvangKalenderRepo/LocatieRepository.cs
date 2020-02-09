using OpvangKalender.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpvangKalender.Repo
{
    public class LocatieRepository:GenericRepository<Locatie>
    {
        public LocatieRepository (OpvangContext context)
    : base(context)
        { }

    }
}
