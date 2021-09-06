import React, { useEffect } from "react";

/** STYLES **/
import "./Pagination.css";

export default function Pagination({
  totalCryptos,
  cryptosPerPage,
  paginateNumber,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCryptos / cryptosPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  return (
    <div className="pagination-container">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button
                className="page-link"
                onClick={() => paginateNumber(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
