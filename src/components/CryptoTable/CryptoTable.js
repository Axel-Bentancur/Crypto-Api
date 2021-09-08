import React, { useState } from "react";
import { Link } from "react-router-dom";

/** COMPONENTS **/
import Pagination from "../Pagination/Pagination";
import { currency, percentage, currencyVol } from "../Helpers/Helpers.js";

/** STYLES **/
import "./CryptoTable.css";

export default function CryptoTable({ cryptoList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [cryptosPerPage] = useState(25);

  const paginateNumber = (number) => {
    setCurrentPage(number);
  };

  const indexOfLastCrypto = currentPage * cryptosPerPage;
  const indexOfFirstCrypto = indexOfLastCrypto - cryptosPerPage;
  const currentCryptos = cryptoList.slice(
    indexOfFirstCrypto,
    indexOfLastCrypto
  );

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
            {currentCryptos.map((crypto) => (
              <tr key={crypto.id}>
                <th scope="row">{crypto.market_cap_rank}</th>
                <td className="crypto-link">
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
                <td className="fw-6">{currency(crypto.current_price)}</td>
                <td
                  className={
                    crypto.price_change_percentage_24h > 0
                      ? "fw-6 positive"
                      : "fw-6 negative"
                  }
                >
                  {percentage(crypto.price_change_percentage_24h)}
                </td>
                <td className="fw-6">{currencyVol(crypto.market_cap)}</td>
                <td className="fw-6">{currencyVol(crypto.total_volume)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          totalCryptos={cryptoList.length}
          cryptosPerPage={cryptosPerPage}
          paginateNumber={paginateNumber}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
