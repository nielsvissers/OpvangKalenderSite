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
    public class OpvangPlaatsController : ControllerBase
    {
        private readonly OpvangContext _context;
        private readonly OpvangPlaatsRepository _repo;

        public OpvangPlaatsController(OpvangContext context)
        {
            _context = context;
            _repo = new OpvangPlaatsRepository(_context);
        }
        // GET: api/Todo
        [HttpGet]
        public IEnumerable<OpvangPlaats> GetOpvangPlaatsen()
        {
            return  _repo.GetAll(new List<string> { "Locatie" , "Contacten", "OpvangMomenten", "Contacten.TypeContactGegeven",
            "OpvangMomenten.KindOpvangMomenten",
            "OpvangMomenten.KindOpvangMomenten.Kind"}).ToList();
        }

        // GET: api/Todo/5
        [HttpGet("{id}")]
        public ActionResult<OpvangPlaats> GetOpvangPlaats(int id)
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
        public ActionResult<OpvangPlaats> PostOpvangPlaats(OpvangPlaats item)
        {
            _repo.Create(item);
            _repo.Save();

            return CreatedAtAction(nameof(GetOpvangPlaats), new { id = item.Id }, item);
        }
        // PUT: api/Todo/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOpvangPlaats(long id, OpvangPlaats item)
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
        public async Task<IActionResult> DeleteOpvangplaats(long id)
        {
            var todoItem = await _context.OpvangPlaats.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            _context.OpvangPlaats.Remove(todoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
