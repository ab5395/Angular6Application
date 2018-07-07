using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace OnlineGiftWebApp.Data.Migrations
{
    public partial class CreateErrorTale : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ErrorLog",
                columns: table => new
                {
                    LogId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    InnerMessage = table.Column<string>(type: "varchar(500)", nullable: true),
                    LogDate = table.Column<DateTime>(nullable: false),
                    Message = table.Column<string>(type: "varchar(500)", nullable: true),
                    Source = table.Column<string>(type: "varchar(500)", nullable: true),
                    StackTrace = table.Column<string>(type: "LONGTEXT", nullable: true),
                    TargetSite = table.Column<string>(type: "varchar(500)", nullable: true),
                    Type = table.Column<string>(type: "varchar(500)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ErrorLog", x => x.LogId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ErrorLog");
        }
    }
}
