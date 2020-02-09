namespace OpvangKalender.Model
{
    public class KindOpvangMoment: Entiteit
    {
        public Kind Kind { get; set; }
        public OpvangMoment OpvangMoment { get; set; }
        public int KindId { get; set; }
        public int OpvangMomentId { get; set; }
    }
}