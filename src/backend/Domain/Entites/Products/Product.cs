using Core.Domain;

namespace Domain.Entites
{
    public class Product : BaseEntity
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

        public Supplier Supplier { get; set; }
        public Category Category { get; set; }

    }
}