using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace OpvangKalender.Model
{
    public class OpvangContact: Entiteit
    {
        public int TypeContactGegevenId { get; set; }
        public string Gegeven { get; set; }
        [Column("OntvangHerinnering", TypeName = "bit")]
        [DefaultValue(false)]
        public bool OntvangHerinnering { get; set; }
        public OpvangPlaats Opvangplaats { get; set; }
        public int OpvangPlaatsId { get; set; }
        public TypeContactGegeven TypeContactGegeven { get; set; }
    }
}