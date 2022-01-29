using System.Text.Json.Serialization;
using Core.Domain;

namespace Domain.Models
{
    public class ProductModel : BaseModel
    {
        public string Name { get; set; }
        public int SupplierId { get; set; }
        public int CategoryId { get; set; }
        public string QuantityPerUnit { get; set; }
        public decimal UnitPrice { get; set; }
        public short UnitsInStock { get; set; }
        public short UnitsOnOrder { get; set; }
        public short ReorderLevel { get; set; }
        public bool Discontinued { get; set; }

        [JsonIgnore]
        public SupplierModel Supplier { get; set; }
        [JsonIgnore]
        public CategoryModel Category { get; set; }

    }
}