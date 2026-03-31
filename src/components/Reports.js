import "../Styles/reports.css";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, LineChart, Line, Legend
} from "recharts";

const stockData = [
  { name: "Electronics", stock: 40 },
  { name: "Clothing", stock: 25 },
  { name: "Food", stock: 60 },
  { name: "Furniture", stock: 15 },
  { name: "Toys", stock: 30 },
];

const trendData = [
  { month: "Jan", added: 30, removed: 10 },
  { month: "Feb", added: 20, removed: 15 },
  { month: "Mar", added: 50, removed: 20 },
  { month: "Apr", added: 40, removed: 25 },
  { month: "May", added: 35, removed: 18 },
];

function Reports() {
  return (
    <main className="reports">
      <div className="reports-header">
        <h2>Reports & Analytics</h2>
        <p>Visual overview of your inventory</p>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Stock by Category</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={stockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="stock" fill="#4f46e5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Inventory Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="added" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="removed" stroke="#ef4444" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Reports;