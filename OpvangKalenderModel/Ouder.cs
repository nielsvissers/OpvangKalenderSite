using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpvangKalender.Model
{
    public class Ouder: Entiteit
    {
        public string Naam { get; set; }
        public List<KindOuder> Kinderen { get; set; }
    }
}
