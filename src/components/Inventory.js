import "../Styles/inventory.css";

function Inventory() {
  return (
    <main className="inventory">
      <h2>Inventory Status</h2>

      <div className="inventory-grid">
        <div className="inventory-card low">
          Low Stock Items
          <span>12</span>
        </div>

        <div className="inventory-card out">
          Out of Stock
          <span>5</span>
        </div>

        <div className="inventory-card reorder">
          Reorder Required
          <span>8</span>
        </div>
      </div>
    </main>
  );
}

export default Inventory;