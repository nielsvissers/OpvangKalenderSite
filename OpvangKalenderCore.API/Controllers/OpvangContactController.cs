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
    public class OpvangContactController : ControllerBase
    {
        private readonly OpvangContext _context;
        private readonly OpvangContactRepository _repo;

        public OpvangContactController(OpvangContext context)
        {
            _context = context;
            _repo = new OpvangContactRepository(_context);
        }
        // GET: api/Todo
        [HttpGet]
        public IEnumerable<OpvangContact> GetOpvangContacten()
        {
            return  _repo.GetAll().ToList();
        }

        // GET: api/Todo/5
        [HttpGet("{id}")]
        public ActionResult<OpvangContact> GetOpvangContact(int id)
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
        public ActionResult<OpvangContact> PostOpvangContact(OpvangContact item)
        {
            _repo.Create(item);
            _repo.Save();
            

            return CreatedAtAction(nameof(GetOpvangContact), new { id = item.Id }, item);
        }
        // PUT: api/Todo/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOpvangContact(long id, OpvangContact item)
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
        public async Task<IActionResult> DeleteOpvangContact(long id)
        {
            var todoItem = await _context.OpvangContact.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            _context.OpvangContact.Remove(todoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
