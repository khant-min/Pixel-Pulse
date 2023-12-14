using Microsoft.EntityFrameworkCore;
using SocialMedia.RestApi.Models;

namespace SocialMedia.RestApi.EfDbContext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<PostDataModel> Blogs { get; set; }

    }
}
