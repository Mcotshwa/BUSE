using BuseBack.Models;
using BuseBack.ViewModels;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BuseBack.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        //db injection
        private readonly BuseContext _context;

        public TransactionController(BuseContext context)
        {
            _context = context;
        }

        // POST api/<TransactionController>/LogIn
        [HttpPost("LogIn")]
        public object LogIn(LogInVM logIn)
        {
            if (logIn.Name == "test" && logIn.Pass == "Password")
            {
                return Ok();
            }
            else 
            {
                return StatusCode(500);
            }
            
        }

        // GET: api/<TransactionController>
        ///[EnableCors("MyAllowSpecificOrigins")]
        [HttpGet]
        public async  Task<ActionResult<IEnumerable<Transanction>>> GetTransactions()
        {
            return Ok
                (await _context.Transanctions.ToListAsync());
        }

        // GET api/<TransactionController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Transanction>> Get(int id)
        {
            var transaction = await _context.Transanctions.FindAsync(id);

            if(transaction == null)
            {
                return NotFound();
            }
            return transaction;
        }

        // POST api/<TransactionController>
        [HttpPost]
        public async Task<ActionResult<IEnumerable<Transanction>>> PostTransaction(Transanction transanction)
        {
            transanction.TransactionNo = 0;
            _context.Transanctions.Add(transanction);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {

                return Forbid(e.Message);
            }

            return Ok();
        }

        // PUT api/<TransactionController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TransactionController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
