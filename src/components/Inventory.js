import "../Styles/inventory.css";
import { useState } from "react";
import { FaExclamationTriangle, FaTimesCircle, FaSyncAlt } from "react-icons/fa";

function Inventory() {
  const [items, setItems] = useState([
    { id: 1, name: "Product A", quantity: 3, category: "Electronics" },
    { id: 2, name: "Product B", quantity: 0, category: "Clothing" },
    { id: 3, name: "Product C", quantity: 8, category: "Food" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    quantity: "",
  });

  // 🔍 NEW STATES (Search + Filter)
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Handle input
  const handleChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update
  const handleSubmit = () => {
    if (!newItem.name || !newItem.category || !newItem.quantity) {
      alert("Please fill all fields");
      return;
    }

    if (editItem) {
      setItems(items.map(item =>
        item.id === editItem.id
          ? { ...item, ...newItem, quantity: Number(newItem.quantity) }
          : item
      ));
    } else {
      const newProduct = {
        id: Date.now(),
        ...newItem,
        quantity: Number(newItem.quantity),
      };
      setItems([...items, newProduct]);
    }

    setNewItem({ name: "", category: "", quantity: "" });
    setEditItem(null);
    setShowModal(false);
  };

  // Delete
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Edit
  const handleEdit = (item) => {
    setEditItem(item);
    setNewItem({
      name: item.name,
      category: item.category,
      quantity: item.quantity,
    });
    setShowModal(true);
  };

  // Status
  const getStatus = (qty) => {
    if (qty === 0) return "out";
    if (qty < 5) return "low";
    return "ok";
  };

  // 🔍 FILTER LOGIC
  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter === "" || item.category === categoryFilter)
    );
  });

  const lowStock = items.filter(i => getStatus(i.quantity) === "low").length;
  const outOfStock = items.filter(i => getStatus(i.quantity) === "out").length;
  const reorder = items.filter(i => getStatus(i.quantity) !== "ok").length;

  return (
    <main className="inventory">
      <div className="inventory-header">
        <div>
          <h2>Inventory Status</h2>
          <p>Track your stock levels</p>
        </div>

        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add Product
        </button>
      </div>

      {/* Cards */}
      <div className="inventory-grid">
        <div className="inventory-card low">
          <FaExclamationTriangle className="inv-icon yellow" />
          <div>
            <span className="inv-label">Low Stock Items</span>
            <span className="inv-value">{lowStock}</span>
          </div>
        </div>

        <div className="inventory-card out">
          <FaTimesCircle className="inv-icon red" />
          <div>
            <span className="inv-label">Out of Stock</span>
            <span className="inv-value">{outOfStock}</span>
          </div>
        </div>

        <div className="inventory-card reorder">
          <FaSyncAlt className="inv-icon blue" />
          <div>
            <span className="inv-label">Reorder Required</span>
            <span className="inv-value">{reorder}</span>
          </div>
        </div>
      </div>

      {/* 🔍 SEARCH + FILTER UI */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Food">Food</option>
        </select>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.map((item) => {
              const status = getStatus(item.quantity);

              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>

                  <td>
                    <span className={`status ${status}`}>
                      {status === "ok"
                        ? "Available"
                        : status === "low"
                        ? "Low Stock"
                        : "Out of Stock"}
                    </span>
                  </td>

                  <td className="action-buttons">
                    <button className="edit-btn" onClick={() => handleEdit(item)}>Edit</button>
                    <button className="delete-btn" onClick={() => deleteItem(item.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Modal */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>{editItem ? "Edit Product" : "Add Product"}</h3>

              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newItem.name}
                onChange={handleChange}
              />

              <input
                type="text"
                name="category"
                placeholder="Category"
                value={newItem.category}
                onChange={handleChange}
              />

              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={newItem.quantity}
                onChange={handleChange}
              />

              <div className="modal-actions">
                <button onClick={handleSubmit}>
                  {editItem ? "Update" : "Add"}
                </button>

                <button onClick={() => {
                  setShowModal(false);
                  setEditItem(null);
                }}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Inventory;