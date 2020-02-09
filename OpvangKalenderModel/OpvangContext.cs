using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpvangKalender.Model
{
    public class OpvangContext : DbContext
    {
        public string ConnectionString { get; set; }
        public OpvangContext(DbContextOptions<OpvangContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<OpvangPlaats>()
                .HasKey(m => new { m.Id });
            modelBuilder.Entity<Locatie>()
                .HasMany(p=>p.OpvangPlaatsen)
                .WithOne(p=>p.Locatie)
                .HasForeignKey(p=>new { p.LocatieId})
                ;
        }
        public DbSet<OpvangPlaats> OpvangPlaats { get; set; }
        public DbSet<Locatie> Locatie { get; set; }
        public DbSet<Kind> Kind { get; set; }
        public DbSet<KindOpvangMoment> KindOpvangMoment { get; set; }
        public DbSet<OpvangContact> OpvangContact { get; set; }
    }
}
