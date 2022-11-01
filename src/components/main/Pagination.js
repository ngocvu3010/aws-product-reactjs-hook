import React from 'react';

function Pagination({currentPage, handlePagination, totalProduct}) {
  const totalPerPage = 4;
  const totalPage = Math.ceil(totalProduct / totalPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return(
    <section id="pagination">
      <div data-reactroot="">
        <ul className="ais-pagination">
          <li className="ais-pagination--item ais-pagination--item__previous ais-pagination--item__disabled">
            <button className="ais-pagination--link"
              onClick={() => handlePagination(currentPage - 1)}
              disabled={currentPage <= 1}
            >
              <i className="fa fa-angle-left fa-2x" /> Previous page
            </button>
          </li>
          {
            pageNumbers.map((page) => (
              <li className={currentPage == page ? "ais-pagination--item ais-pagination--item__page ais-pagination--item__active active" : "ais-pagination--item ais-pagination--item__page"} key={page}>
                <a className="ais-pagination--link" aria-label={page} href="#" onClick={() => handlePagination(page)}>
                  {page}
                </a>
              </li>
            ))
          }
          <li className="ais-pagination--item ais-pagination--item__next"
            onClick={() => handlePagination(currentPage + 1)}>
            <button className="ais-pagination--link"
              aria-label="Next" href="#"
              disabled={currentPage >= totalPage}
            >
              Next page <i className="fa fa-angle-right fa-2x" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Pagination;
