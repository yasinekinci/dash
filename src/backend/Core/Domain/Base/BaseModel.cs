using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Domain;

public abstract partial class BaseModel : IModel
{
    public int Id { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? UpdatedDate { get; set; }
}

