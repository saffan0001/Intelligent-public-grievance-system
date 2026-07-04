import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    textDecoration: "none",
    color: "#1976d2",
    fontWeight: "bold",
    marginRight: "14px",
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "14px 18px",
        borderRadius: "10px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        marginBottom: "18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            background: "#1976d2",
            color: "white",
            display: "grid",
            placeItems: "center",
            fontWeight: "bold",
          }}
        >
          PG
        </div>
        <div>
          <div style={{ fontWeight: "bold" }}>Public Grievance System</div>
          <div style={{ fontSize: "12px", color: "#6b7280" }}>Navigatio</div>
        </div>
      </div>

      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/user" style={linkStyle}>
          User Dashboard
        </Link>
        <Link to="/admin" style={linkStyle}>
          Admin Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
