using System;
using System.Collections.Generic;

namespace OpvangKalenderCore.API.Models
{
    public class OpvangMoment: Entiteit
    {
        public DateTime StartDagUur { get; set; }
        public DateTime EindDagUur { get; set; }
        public OpvangPlaats Plaats { get; set; }
        public List<KindOpvangMoment> KindOpvangMomenten { get; set; }
        public int OpvangPlaatsId { get; set; }
    }
}