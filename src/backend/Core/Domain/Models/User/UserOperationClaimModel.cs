namespace Core.Domain;

public class UserOperationClaimModel : IModel
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public int OperationClaimId { get; set; }

    public UserModel User { get; set; }
    public OperationClaimModel MyProperty { get; set; }
}