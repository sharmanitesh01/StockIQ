import "../Styles/sidebar.css";
import { FaChartBar, FaBoxOpen, FaWarehouse, FaFileAlt, FaCog } from "react-icons/fa";

function Sidebar({ setPage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">StockIQ</div>

      <nav className="sidebar-menu">
        <div className="menu-item" onClick={() => setPage("dashboard")}>
          <FaChartBar className="icon" />
          Dashboard
        </div>

        <div className="menu-item" onClick={() => setPage("products")}>
          <FaBoxOpen className="icon" />
          Products
        </div>

        <div className="menu-item" onClick={() => setPage("inventory")}>
          <FaWarehouse className="icon" />
          Inventory
        </div>

        <div className="menu-item" onClick={() => setPage("reports")}>
          <FaFileAlt className="icon" />
          Reports
        </div>

        <div className="menu-item" onClick={() => setPage("settings")}>
          <FaCog className="icon" />
          Settings
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;