import React from 'react';
import { ChevronCircledLeft, ChevronCircledRight } from "./ChevronCircled";
import styles from '../../public/css/Pagination.module.css';

interface PaginationProps {
  carsPerPage: number,
  totalCars: number,
  paginate: (num: number) => void;
  currentPage: number,
}

export const Pagination = ({ carsPerPage, totalCars, paginate, currentPage }:PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
    pageNumbers.push(i);
  };

  const firstPage = 1;
  const lastPage = pageNumbers[pageNumbers.length - 1];

  const getPageLeft = (curPage:number) => {
    if(curPage === firstPage) {
      console.log(lastPage);
      return lastPage;
    };
    return curPage - 1;
  };

  const getPageRight = (curPage:number) => {
    if(curPage === lastPage) {
      return firstPage;
    };
    return curPage + 1;
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.cars__pagination}>
        <li className={styles.cars__pagination__item}>
          <a href="#" className='cars__pagination__link' onClick={() => paginate(getPageLeft(currentPage))}>
            <ChevronCircledLeft />
          </a>
        </li>
        <li className={styles.cars__pagination__item}>
          <a href="#" className='cars__pagination__link' onClick={() => paginate(getPageRight(currentPage))}>
            <ChevronCircledRight />
          </a>
        </li>
      </ul>
    </nav>
  )
}
