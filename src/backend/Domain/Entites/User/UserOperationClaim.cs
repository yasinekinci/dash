using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entites
{
    [Table("UserOperationClaims")]
    public class UserOperationClaim : IEntity
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int OperationClaimId { get; set; }

        public User User { get; set; }
        public OperationClaim MyProperty { get; set; }

    }
}