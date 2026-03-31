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
        <div>
          <h2>Dashboard</h2>
          <p>Inventory Overview</p>
        </div>

        <button className="refresh-btn">
          <FaSyncAlt /> Refresh
        </button>
      </div>

      <div className="cards-grid">
        {/* Total Products */}
        <div className="card">
          <div className="card-content">
            <div className="card-text">
              <span className="card-title">Total Products</span>
              <span className="card-value">150</span>
            </div>
            <FaBox className="card-icon blue" />
          </div>
        </div>

        {/* Low Stock */}
        <div className="card warning">
          <div className="card-content">
            <div className="card-text">
              <span className="card-title">Low Stock</span>
              <span className="card-value">12</span>
            </div>
            <FaExclamationTriangle className="card-icon yellow" />
          </div>
        </div>

        {/* Out of Stock */}
        <div className="card danger">
          <div className="card-content">
            <div className="card-text">
              <span className="card-title">Out of Stock</span>
              <span className="card-value">5</span>
            </div>
            <FaTimesCircle className="card-icon red" />
          </div>
        </div>

        {/* Reorder */}
        <div className="card info">
          <div className="card-content">
            <div className="card-text">
              <span className="card-title">Reorder Required</span>
              <span className="card-value">8</span>
            </div>
            <FaSyncAlt className="card-icon green" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;