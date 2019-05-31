using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace OpvangKalenderCore.API.Models
{
    public class Kind: Entiteit
    {
        public string Naam { get; set; }
        [Column("SchoolGaand", TypeName = "bit")]
        [DefaultValue(false)]
        public bool SchoolGaand { get; set; }
        public List<KindOpvangMoment> KindOpvangMomenten { get; set; }
    }
}