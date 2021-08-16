import React from "react";
import "../CryptoSideTable.css";

export default function CryptoLeftTable({ cryptoList }) {
  let res = cryptoList.slice(0, 3);
  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="container list-top">
      <div className="list">
        <div className="info top">
          <h4 className="side-text">TOP 3</h4>
          <div className="info-container">
            <span className="row-info center rank">#</span>
            <span className="row-info center name">Name</span>
            <span className="row-info center price">Price</span>
          </div>
        </div>
        {res.map((e, idx) => (
          <div className="info info-size" key={e.id}>
            <span className={"row-info rank color" + idx}>{e.cmc_rank}</span>
            <span className={"row-info name color" + idx}>{e.name}</span>
            <span className={"row-info price color" + idx}>
              {currencyFormat(e.quote.USD.price)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* <div className="info">
          <span className="row-info rank t-color">rank</span>
          <span className="row-info name t-color">nombre</span>
          <span className="row-info price t-color">precio</span>
        </div> */
