import React, { useMemo } from "react";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = useMemo(() => getPagesArray(totalPages), [totalPages]);
  return (
    <div className="page__wrapper">
      {pagesArray.map((p, index) => (
        <span
          onClick={() => changePage(p)}
          key={index}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
