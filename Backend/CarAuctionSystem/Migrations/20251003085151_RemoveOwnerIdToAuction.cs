using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarAuctionSystem.Migrations
{
    /// <inheritdoc />
    public partial class RemoveOwnerIdToAuction : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Auctions_CarId",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "Owner",
                table: "Auctions");

            migrationBuilder.CreateIndex(
                name: "IX_Auctions_CarId",
                table: "Auctions",
                column: "CarId",
                unique: true,
                filter: "[CarId] IS NOT NULL");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Auctions_CarId",
                table: "Auctions");

            migrationBuilder.AddColumn<string>(
                name: "Owner",
                table: "Auctions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Auctions_CarId",
                table: "Auctions",
                column: "CarId");
        }
    }
}
