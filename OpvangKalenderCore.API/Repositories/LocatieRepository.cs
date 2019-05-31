using OpvangKalenderCore.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpvangKalenderCore.API.Repositories
{
    public class LocatieRepository:GenericRepository<Locatie>
    {
        public LocatieRepository (OpvangContext context)
    : base(context)
        { }

    }
}
