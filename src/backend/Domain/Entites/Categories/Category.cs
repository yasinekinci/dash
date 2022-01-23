using Core.Domain;

namespace Domain.Entites
{
    public class Category : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public byte[] Image { get; set; }
    }
}