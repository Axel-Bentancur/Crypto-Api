import React from "react";
import "./CryptoRow.css";

export default function CryptoRow({ cryptoData }) {
  let price = cryptoData.quote.USD.price; //price
  let tfh = cryptoData.quote.USD.percent_change_24h; //24h
  let sd = cryptoData.quote.USD.percent_change_7d; //7days
  let mc = cryptoData.quote.USD.market_cap;

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, ",");
  }

  function procentFormat(num) {
    let porcent = num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, ",");
    if (porcent < 0) {
      return `%${porcent}`;
    } else {
      return `%${porcent}`;
    }
  }

  return (
    <div className="info">
      <span className="row-info rank t-color">{cryptoData.cmc_rank}</span>
      <span className="row-info name t-color">{cryptoData.name}</span>
      <span className="row-info price t-color">{currencyFormat(price)}</span>
      <span className="row-info day t-color">{procentFormat(tfh)}</span>
      <span className="row-info week t-color">{procentFormat(sd)}</span>
      <span className="row-info market t-color">{currencyFormat(mc)}</span>
    </div>
  );
}
