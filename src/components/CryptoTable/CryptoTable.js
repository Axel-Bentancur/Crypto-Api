import React from "react";
import "./CryptoTable.css";
import CryptoRow from "./CryptoRow/CryptoRow";

export default function CryptoTable({ cryptoList }) {
  return (
    <div className="table">
      <div className="table-info">
        <div className="info">
          <span className="row-info rank">#</span>
          <span className="row-info name">Name</span>
          <span className="row-info price">Price</span>
          <span className="row-info day">24h %</span>
          <span className="row-info week">7d %</span>
          <span className="row-info market">Market Cap</span>
        </div>
      </div>
      {cryptoList.map((data) => (
        <CryptoRow cryptoData={data} key={data.id} />
      ))}
    </div>
  );
}
