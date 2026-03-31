import { useState } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";
import Products from "./components/Product";
import Inventory from "./components/Inventory";
import Reports from "./components/Reports";
import Settings from "./components/Settings";

function App() {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "products":
        return <Products />;
      case "inventory":
        return <Inventory />;
      case "reports":
        return <Reports />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <Sidebar setPage={setPage} />
      <Navbar />
      {renderPage()}
    </>
  );
}

export default App;