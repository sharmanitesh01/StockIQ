import "../Styles/navbar.css";

function Navbar({ page }) {
  const titles = {
    dashboard: "Dashboard",
    products: "Products",
    inventory: "Inventory",
    reports: "Reports & Analytics",
    settings: "Settings",
  };

  return (
    <header className="navbar">
      <div className="navbar-title">{titles[page] || "Dashboard"}</div>
      <div className="navbar-actions">
        <span>Admin</span>
      </div>
    </header>
  );
}

export default Navbar;