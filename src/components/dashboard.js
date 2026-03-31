import "../Styles/dashboard.css";
import {
  FaBox,
  FaExclamationTriangle,
  FaTimesCircle,
  FaSyncAlt,
} from "react-icons/fa";

function Dashboard() {
  return (
    <main className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <p>Inventory Overview</p>
      </div>

      <div className="cards-grid">
        <div className="card">
          <div className="card-content">
            <div className="card-text">
              <span className="card-title">Total Products</span>
              <span className="card-value">150</span>
            </div>
            <FaBox className="card-icon" />
          </div>
        </div>

        <div className="card warning">
          <div className="card-content">
            <div className="card-text">
              <span className="card-title">Low Stock</span>
              <span className="card-value">12</span>
            </div>
            <FaExclamationTriangle className="card-icon" />
          </div>
        </div>

        <div className="card danger">
          <div className="card-content">
            <div className="card-text">
              <span className="card-title">Out of Stock</span>
              <span className="card-value">5</span>
            </div>
            <FaTimesCircle className="card-icon" />
          </div>
        </div>

        <div className="card info">
          <div className="card-content">
            <div className="card-text">
              <span className="card-title">Reorder Required</span>
              <span className="card-value">8</span>
            </div>
            <FaSyncAlt className="card-icon" />
          </div>
        </div>

        {/* <div className="dashboard-row">
          <div className="chart-box">
            <h3>Inventory Trend</h3>
            <p>Monthly stock movement visualization</p>
          </div>

          <div className="activity-box">
            <h3>Recent Activity</h3>
            <ul>
              <li>Added new product: Keyboard</li>
              <li>Updated stock: Laptop</li>
              <li>Low stock alert: Mouse</li>
            </ul>
          </div>
        </div>

        <div className="alerts-box">
          <h3>Stock Alerts</h3>

          <div className="alert warning">12 items running low</div>

          <div className="alert danger">5 items out of stock</div>
        </div> */}

        
      </div>
    </main>
  );
}

export default Dashboard;
