import React from "react";
import { Link } from "react-router-dom";

/** COMPONENTS **/
import Pagination from "../Pagination/Pagination";

/** STYLES **/
import "./CryptoTable.css";

export default function CryptoTable({
  cryptoList,
  getCrypto,
  totalCryptos,
  cryptosPerPage,
  paginateNumber,
  currentPage,
}) {
  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, ",");
  }

  function procentFormat(num) {
    let porcent = num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, ",");
    if (porcent < 0) {
      return `${porcent}%`;
    } else {
      return `${porcent}%`;
    }
  }

  return (
    <div id="main">
      <div className="table-responsive-sm m-4">
        <table className="table table-hover">
          <thead>
            <tr className="table-primary">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col"></th>
              <th scope="col">Price</th>
              <th scope="col">24h %</th>
              <th scope="col">Market Cap</th>
              <th scope="col">Volume(24h)</th>
            </tr>
          </thead>
          <tbody>
            {cryptoList.map((crypto) => (
              <tr key={crypto.id}>
                <th scope="row">{crypto.market_cap_rank}</th>
                <td
                  className="crypto-link"
                  onClick={(e) => getCrypto(crypto.id)}
                >
                  <Link to={`/crypto/${crypto.id}`}>
                    <div className="crypto-name-container">
                      <img
                        src={crypto.image}
                        alt={crypto.name}
                        className="crypto-img"
                      />
                      <span className="crypto-name">{crypto.name}</span>
                    </div>
                  </Link>
                </td>
                <td>
                  <span className="crypto-symbol">
                    {crypto.symbol.toUpperCase()}
                  </span>
                </td>
                <td className="fw-6">{currencyFormat(crypto.current_price)}</td>
                <td
                  className={
                    crypto.price_change_percentage_24h > 0
                      ? "fw-6 positive"
                      : "fw-6 negative"
                  }
                >
                  {procentFormat(crypto.price_change_percentage_24h)}
                </td>
                <td className="fw-6">{currencyFormat(crypto.market_cap)}</td>
                <td className="fw-6">{currencyFormat(crypto.total_volume)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          totalCryptos={totalCryptos}
          cryptosPerPage={cryptosPerPage}
          paginateNumber={paginateNumber}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
