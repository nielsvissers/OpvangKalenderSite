using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OpvangKalenderCore.API.Models;
using Microsoft.EntityFrameworkCore;
using OpvangKalenderCore.API.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OpvangKalenderCore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocatieController : ControllerBase
    {
        private readonly OpvangContext _context;
        private readonly LocatieRepository _repo;

        public LocatieController(OpvangContext context)
        {
            _context = context;
            _repo = new LocatieRepository(_context);
        }
        // GET: api/Todo
        [HttpGet]
        public IEnumerable<Locatie> GetLocatieen()
        {
            return  _repo.GetAll().ToList();
        }

        // GET: api/Todo/5
        [HttpGet("{id}")]
        public ActionResult<Locatie> GetLocatie(int id)
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
        public ActionResult<Locatie> PostLocatie(Locatie item)
        {
            _repo.Create(item);
            _repo.Save();
            

            return CreatedAtAction(nameof(GetLocatie), new { id = item.Id }, item);
        }
        // PUT: api/Todo/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLocatie(long id, Locatie item)
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
        public async Task<IActionResult> DeleteLocatie(long id)
        {
            var todoItem = await _context.Locatie.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            _context.Locatie.Remove(todoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
