using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TTSWebApi.HubConfig;
using Microsoft.AspNetCore.SignalR;

namespace TTSWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TTSSupportController : ControllerBase
    {
        private readonly ILogger<TTSSupportController> _logger;
        private IHubContext<TokenHub> _hub;

        public TTSSupportController(ILogger<TTSSupportController> logger,IHubContext<TokenHub> hub)
        {
            _logger = logger;
            _hub=hub;
        }

        [HttpGet]
        public IActionResult Get(string val)
        {
            _hub.Clients.All.SendAsync("transferchartdata",val);
            return Ok(new { Message = "Request Completed" });
        }
    }
}
