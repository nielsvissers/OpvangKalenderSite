using System.Collections.Generic;

namespace OpvangKalenderCore.API.Models
{
    public class TypeContactGegeven: Entiteit
    {
        public string TypeNaam { get; set; }
        public List<OpvangContact> ContactGegevens { get; set; }
    }
}