import "../Styles/settings.css";

function Settings() {
  return (
    <main className="settings">
      <h2>Settings</h2>

      {/* Profile */}
      <div className="settings-section">
        <h3>Profile Settings</h3>

        <div className="btn-group">
          <button className="primary-btn">Update Profile</button>
          <button className="secondary-btn">Change Password</button>
        </div>
      </div>

      {/* Notifications */}
      <div className="settings-section">
        <h3>Notification Settings</h3>

        <div className="toggle-row">
          <span>Low Stock Alerts</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-row">
          <span>Email Notifications</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* Inventory */}
      <div className="settings-section">
        <h3>Inventory Preferences</h3>

        <div className="input-group">
          <label>Low Stock Threshold</label>
          <input type="number" placeholder="e.g. 5" />
        </div>

        <div className="input-group">
          <label>Default Reorder Quantity</label>
          <input type="number" placeholder="e.g. 20" />
        </div>

        <button className="save-btn">Save Changes</button>
      </div>
    </main>
  );
}

export default Settings;