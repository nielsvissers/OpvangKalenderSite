using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OpvangKalender.Model;
using Microsoft.EntityFrameworkCore;
using OpvangKalender.Repo;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OpvangKalender.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KindOpvangMomentController : ControllerBase
    {
        private readonly OpvangContext _context;
        private readonly KindOpvangMomentRepository _repo;

        public KindOpvangMomentController(OpvangContext context)
        {
            _context = context;
            _repo = new KindOpvangMomentRepository(_context);
        }
        // GET: api/Todo
        [HttpGet]
        public IEnumerable<KindOpvangMoment> GetKindOpvangMomenten()
        {
            return  _repo.GetAll().ToList();
        }

        // GET: api/Todo/5
        [HttpGet("{id}")]
        public ActionResult<KindOpvangMoment> GetKindOpvangMoment(int id)
        {
            var todoItem = _repo.GetById(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }
        // POST: api/Todo
        [HttpPost]
        public ActionResult<KindOpvangMoment> PostKindOpvangMoment(KindOpvangMoment item)
        {
            _repo.Create(item);
            _repo.Save();
            

            return CreatedAtAction(nameof(GetKindOpvangMoment), new { id = item.Id }, item);
        }
        // PUT: api/Todo/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKindOpvangMoment(long id, KindOpvangMoment item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }
        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKindOpvangMoment(long id)
        {
            var todoItem = await _context.KindOpvangMoment.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            _context.KindOpvangMoment.Remove(todoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
