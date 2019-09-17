import React from 'react';
import PaginationStyle from './Pagination.module.css';

export const Pagination = ({ totalCount, countUsers, currentPage, changePage }) => {
    
    const countPages = Math.ceil(totalCount / countUsers);

    let arrayPages = [];
    for (let i = 1; i <= countPages; i++) {
        arrayPages.push(i);
    }

    return (
        <ul className={PaginationStyle.pagination}>
            {
                arrayPages.map(number => {
                    return (
                        <li className={currentPage === number ? PaginationStyle.active : ''} key={number}
                            onClick={() => changePage(number)}>

                            {number}

                        </li>
                    )
                })
            }
        </ul>
    )
}