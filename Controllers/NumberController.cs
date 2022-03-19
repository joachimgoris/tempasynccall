using Microsoft.AspNetCore.Mvc;

namespace jsserver.Controllers;

[ApiController]
[Route("/number")]
public class NumberController : ControllerBase
{
    [HttpGet(Name = "GetNumber")]
    public IActionResult GetNumber()
    {
        Random rdm = new Random();
        Thread.Sleep(rdm.Next(15) * 1000);

        return Ok(rdm.Next(101));
    }
}