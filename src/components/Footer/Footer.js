import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center border-top footer">
        <span className="col-md-4 mb-0 text-muted">© 2021 Durpha, Inc</span>
        <span className="col-md-4 mb-0 text-muted text-end">
          Aplicacion Creada por Axel Bentancur
        </span>
      </footer>
    </div>
  );
}
