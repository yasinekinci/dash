using System;
using System.Collections.Generic;
using System.Text;
namespace Domain;
public abstract partial class BaseEntity
{
    /// <summary>
    /// Gets or sets the entity identifier
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Get or sets the created date
    /// </summary>
    /// <value></value>
    public DateTime CreatedDate { get; set; }

    /// <summary>
    /// Get or sets the update date
    /// </summary>
    /// <value></value>
    public DateTime UpdatedDate { get; set; }
}

