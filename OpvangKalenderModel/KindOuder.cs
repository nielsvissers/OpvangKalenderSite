using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpvangKalender.Model
{
    public class KindOuder: Entiteit
    {
        public int KindId { get; set; }
        public int OuderId { get; set; }

        public Kind Kind { get; set; }
        public Ouder Ouder { get; set; }
    }
}
