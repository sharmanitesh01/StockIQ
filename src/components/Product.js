import "../Styles/Product.css";
import { useState } from "react";

function Products() {
  // 🧠 State for form
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  // 🧠 State for product list
  const [products, setProducts] = useState([]);

  // ➕ Add product function
  const handleAddProduct = () => {
    if (!name || !quantity || !category) {
      alert("Please fill all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      quantity: Number(quantity),
      category,
    };

    setProducts([...products, newProduct]);

    // Clear inputs
    setName("");
    setQuantity("");
    setCategory("");
  };

  // 🔥 Status logic
  const getStatus = (qty) => {
    if (qty === 0) return "out";
    if (qty < 5) return "low";
    return "ok";
  };

  return (
    <main className="products">
      <div className="products-header">
        <div>
          <h2>Products</h2>
          <p>Manage your inventory items</p>
        </div>
        <button className="add-btn">+ Add Product</button>
      </div>

      {/* Form */}
      <div className="product-form">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button onClick={handleAddProduct}>Add</button>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => {
              const status = getStatus(product.quantity);

              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.category}</td>
                  <td>
                    <span className={`status ${status}`}>
                      {status === "ok"
                        ? "Available"
                        : status === "low"
                        ? "Low Stock"
                        : "Out of Stock"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Products;