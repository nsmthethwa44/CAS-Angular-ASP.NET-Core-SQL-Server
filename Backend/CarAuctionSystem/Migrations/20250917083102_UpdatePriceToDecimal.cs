using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarAuctionSystem.Migrations
{
    /// <inheritdoc />
    public partial class UpdatePriceToDecimal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Amount",
                table: "Payments");

            migrationBuilder.DropColumn(
                name: "Amount",
                table: "Bids");

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "Payments",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "Bids",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Price",
                table: "Payments");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Bids");

            migrationBuilder.AddColumn<string>(
                name: "Amount",
                table: "Payments",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Amount",
                table: "Bids",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
