import React from "react";

const Pagination = props => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(props.totalQues / props.quePerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <nav>
        <ul className="pagination justify-content-center">
          {pageNumber.map((number, i) => {
            return (
              <li key={i} className="page-item">
                <a
                  onClick={() => props.paginate(number)}
                  href="!#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <br />
    </div>
  );
};

export default Pagination;
