using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entites
{
    [Table("OperationClaims")]
    public class OperationClaim : BaseEntity
    {
        public string Name { get; set; }
    }
}