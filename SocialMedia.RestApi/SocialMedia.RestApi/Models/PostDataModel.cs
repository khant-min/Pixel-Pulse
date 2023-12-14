using System.ComponentModel.DataAnnotations.Schema;

namespace SocialMedia.RestApi.Models
{
    [Table("tbl_posts")]
    public class PostDataModel
    {
        public int id { get; set; }
        public string? blogContent { get; set; }
    }
}
