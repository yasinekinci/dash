using System.Reflection;
using System.Text.Json.Serialization;
using Api.Filters;
using Api.Middlewares;
using Api.Modules;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Core.Utilities.Security.Encyption;
using Core.Utilities.Security.Jwt;
using Data;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Service;
using Service.Valiadations.FluentValidation;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddScoped(typeof(NotFoundFilter<>));
builder.Services.AddControllers(options =>
{
    options.Filters.Add(new ValideFilterAttribute());
}).AddFluentValidation(x => x.RegisterValidatorsFromAssemblyContaining<ProductModelValidator>()).AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
});

builder.Services.Configure<ApiBehaviorOptions>(options =>
{
    options.SuppressModelStateInvalidFilter = true;
});

TokenOptions _tokenOptions = new TokenOptions();
builder.Configuration.GetSection("TokenOptions").Bind(_tokenOptions);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters()
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidIssuer = _tokenOptions.Issuer,
        ValidAudience = _tokenOptions.Audience,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = SecurityKeyHelper.CreateSecurityKey(_tokenOptions.SecurityKey)
    };
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Test01", Version = "v1" });

    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "JWT Authorization header using the Bearer scheme."

    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                          new OpenApiSecurityScheme
                          {
                              Reference = new OpenApiReference
                              {
                                  Type = ReferenceType.SecurityScheme,
                                  Id = "Bearer"
                              }
                          },
                         new string[] {}
                    }
                });
});
builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());
builder.Services.AddCors();

builder.Services.AddDbContext<DashboardDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("SqlConStr"), options =>
    {
        options.MigrationsAssembly(Assembly.GetAssembly(typeof(DashboardDbContext)).GetName().Name);
    });
});

builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());
builder.Host.ConfigureContainer<ContainerBuilder>(containerBuilder => containerBuilder.RegisterModule(new RepoServiceModule()));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.UseHttpsRedirection();
app.UseCustomException();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
