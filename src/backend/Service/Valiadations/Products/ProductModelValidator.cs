using System.Data;
using Domain.Models;
using FluentValidation;

namespace Service
{
    public class ProductModelValidator : AbstractValidator<ProductModel>
    {
        public ProductModelValidator()
        {
            RuleFor(x => x.Name).NotNull().WithMessage("{PropertyName} is reqired").NotEmpty().WithMessage("{PropertyName} is reqired");
            RuleFor(x => x.UnitPrice).InclusiveBetween(1, decimal.MaxValue).WithMessage("{PropertyName} must be greater 0");
            RuleFor(x => x.UnitsInStock).InclusiveBetween(1, int.MaxValue).WithMessage("{PropertyName} must be greater 0");
            RuleFor(x => x.CategoryId).InclusiveBetween(1, int.MaxValue).WithMessage("{PropertyName} must be greater 0");
        }
    }
}