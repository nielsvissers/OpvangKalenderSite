using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpvangKalender.Model
{
    public class Locatie: Entiteit
    {
        public string Straat { get; set; }
        public string Nr { get; set; }
        public int Postcode { get; set; }
        public string Gemeente { get; set; }
        public List<OpvangPlaats> OpvangPlaatsen { get; set; }
    }
}
