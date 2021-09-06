import React from "react";

/** STYLES **/
import "./Loader.css";
import SLoader from "./slime_loader.gif";

export default function Loader() {
  return (
    <div className="loader-container">
      <img src={SLoader} alt="Crypto Slime Loader" />
      <span>Loading...</span>
    </div>
  );
}
