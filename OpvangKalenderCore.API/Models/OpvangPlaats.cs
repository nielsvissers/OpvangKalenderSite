using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OpvangKalenderCore.API.Models
{
    public class OpvangPlaats: Entiteit
    {
        public string Naam { get; set;}
        public Locatie Locatie { get; set; }
        public int LocatieId { get; set; }
public List<OpvangContact> Contacten { get; set; }
        public List<OpvangMoment> OpvangMomenten { get; set; }
    }
}
