import React from 'react';
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss';


const Pagination = ({ setPageNumber, pageNumber, info }) => {
  let pageChange = (data) => {
    setPageNumber(data.selected + 1);
  };
  return (
  <div>
    <ReactPaginate
        className = {styles.pagination}
        nextLabel = ">"
        forcePage = { pageNumber === 1 ? 0 : pageNumber - 1 }
        previousLabel = "<"
        previousClassName = {styles.pagination__prev}
        nextClassName = {styles.pagination__next}
        activeClassName = {styles.pagination__active}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName = {styles.pagination__item}
        pageLinkClassName = {styles.pagination__link}
      />
  </div>
  );
};

export default Pagination;
