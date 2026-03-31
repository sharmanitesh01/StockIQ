import "../Styles/Product.css";

function Products() {
  return (
    <main className="products">
      <div className="products-header">
        <h2>Products</h2>
        <button className="add-btn">+ Add Product</button>
      </div>

      <div className="product-form">
        <input type="text" placeholder="Product Name" />
        <input type="number" placeholder="Quantity" />
        <input type="text" placeholder="Category" />
        <button>Add</button>
      </div>

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
          <tr>
            <td>Laptop</td>
            <td>10</td>
            <td>Electronics</td>
            <td className="status ok">Available</td>
          </tr>

          <tr>
            <td>Mouse</td>
            <td>2</td>
            <td>Accessories</td>
            <td className="status low">Low Stock</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Products;