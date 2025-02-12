using BuseBack.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;


//cor origin var
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
                          policy =>
                          {
                              Microsoft.AspNetCore.Cors.Infrastructure.CorsPolicyBuilder corsPolicyBuilder = policy.WithOrigins("*")
                              .AllowAnyHeader()
                               .AllowAnyMethod()
                              ;
                              //WithOrigins("http://localhost:8100"
                              //                    )
                              //                    .AllowAnyHeader()
                              //                    .AllowAnyMethod();
                          });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//solve runtime error associated with dbcontext injection
builder.Services.AddDbContext<BuseContext>(options=>
     options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

//add cors



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseRouting();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
