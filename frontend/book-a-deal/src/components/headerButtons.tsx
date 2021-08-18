import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function HeaderButtons() {
  return (
    <header className="header">
      <div className="login-btn-container">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="secondary">
            {" "}
            Login
          </Button>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="secondary">
            {" "}
            Register
          </Button>
        </Link>
      </div>
    </header>
  );
}
