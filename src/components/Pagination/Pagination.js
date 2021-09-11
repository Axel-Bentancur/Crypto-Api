import React, { useEffect } from "react";

export default function Pagination({
  totalCryptos,
  cryptosPerPage,
  paginateNumber,
  currentPage,
}) {
  const lastPage = Math.ceil(totalCryptos / cryptosPerPage);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  return (
    <div className="pagination-container">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center pagination-sm">
          {currentPage > 1 ? (
            <>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => paginateNumber(currentPage - 1)}
                >
                  &laquo;
                </button>
              </li>
              <li className="page-item">
                <button className="page-link" onClick={() => paginateNumber(1)}>
                  {1}
                </button>
              </li>
              <li className="page-item disabled">
                <button className="page-link">...</button>
              </li>
            </>
          ) : null}
          <li className="page-item">
            <button className="page-link">{currentPage}</button>
          </li>
          {currentPage === lastPage ? null : (
            <>
              <li className="page-item disabled">
                <button className="page-link">...</button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => paginateNumber(lastPage)}
                >
                  {lastPage}
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => paginateNumber(currentPage + 1)}
                >
                  &raquo;
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
