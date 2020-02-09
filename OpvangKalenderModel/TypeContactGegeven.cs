using System.Collections.Generic;

namespace OpvangKalender.Model
{
    public class TypeContactGegeven: Entiteit
    {
        public string TypeNaam { get; set; }
        public List<OpvangContact> ContactGegevens { get; set; }
    }
}