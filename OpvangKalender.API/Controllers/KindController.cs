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
    [Route("api/Kinderen")]
    [ApiController]
    public class KindController : ControllerBase
    {
        private readonly OpvangContext _context;
        private readonly KindRepository _repo;

        public KindController(OpvangContext context)
        {
            _context = context;
            _repo = new KindRepository(_context);
        }
        // GET: api/Todo
        [HttpGet]
        public IEnumerable<Kind> GetKinderen()
        {
            return  _repo.GetAll().ToList();
        }

        // GET: api/Todo/5
        [HttpGet("{id}")]
        public ActionResult<Kind> GetKind(int id)
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
        public ActionResult<Kind> PostKind(Kind item)
        {
            _repo.Create(item);
            _repo.Save();
            

            return CreatedAtAction(nameof(GetKind), new { id = item.Id }, item);
        }
        // PUT: api/Todo/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKind(long id, Kind item)
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
        public async Task<IActionResult> DeleteKind(int id)
        {
            Kind TeVerwijderenKind = new Kind();
            try
            {
                TeVerwijderenKind = await _context.Kind.FindAsync(id);
            }
            catch (Exception ex)
            {

                throw;
            }

            if (TeVerwijderenKind == null)
            {
                return NotFound();
            }

            _context.Kind.Remove(TeVerwijderenKind);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
