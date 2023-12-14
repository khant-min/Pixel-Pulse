using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SocialMedia.RestApi.EfDbContext;
using SocialMedia.RestApi.Models;

namespace SocialMedia.RestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        //private readonly AppDbContext db;
          private readonly AppDbContext _context;

            public PostController(AppDbContext context)
            {
                _context = context;
            }

        [HttpGet]
        public ActionResult<PostDataModel> GetPosts()
        {
            //AppDbContext db = new AppDbContext();
            var posts = _context;
            Console.WriteLine("posts: ", posts);
            return Ok("good..");
        }
    }
}
