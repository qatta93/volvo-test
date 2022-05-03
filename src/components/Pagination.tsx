import React from 'react';
import { ChevronCircledLeft, ChevronCircledRight } from "./ChevronCircled";


export const Pagination = ({ carsPerPage, totalCars, paginate }:any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
    pageNumbers.push(i);
  };

  return (
    <nav>
      <ul className='cars__pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='cars__pagination__item'>
            <a href="#" className='cars__pagination__link' onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
