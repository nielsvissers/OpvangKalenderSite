namespace OpvangKalenderCore.API.Models
{
    public class KindOpvangMoment: Entiteit
    {
        public Kind Kind { get; set; }
        public OpvangMoment OpvangMoment { get; set; }
        public int KindId { get; set; }
        public int OpvangMomentId { get; set; }
    }
}