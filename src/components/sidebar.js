import "../Styles/sidebar.css";
import {
  FaChartBar,
  FaBoxOpen,
  FaWarehouse,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";

function Sidebar({ setPage, activePage }) {
  const menuItems = [
    { key: "dashboard", icon: <FaChartBar className="icon" />, label: "Dashboard" },
    { key: "products", icon: <FaBoxOpen className="icon" />, label: "Products" },
    { key: "inventory", icon: <FaWarehouse className="icon" />, label: "Inventory" },
    { key: "reports", icon: <FaFileAlt className="icon" />, label: "Reports" },
    { key: "settings", icon: <FaCog className="icon" />, label: "Settings" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">StockIQ</div>
      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={`menu-item ${activePage === item.key ? "active" : ""}`}
            onClick={() => setPage(item.key)}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;