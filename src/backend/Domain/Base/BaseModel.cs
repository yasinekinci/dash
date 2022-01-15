using System;
using System.Collections.Generic;
using System.Text;

namespace Domain;

public abstract partial class BaseModel
{
    public int Id { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime UpdatedDate { get; set; }
}

