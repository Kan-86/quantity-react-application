import React from 'react';

type pageProps = {
    postsPerPage: number,
    totalPosts?: number,
    paginate: number
}

export default function Pagination({postsPerPage, totalPosts, paginate}: pageProps) {
    const pageNumbers = [];

    if (totalPosts !== undefined) {
        for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
        }
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((value, index) => (
                    <li key={index} className="page-item">
                        <a href="!#" className="page-link">
                            {value}    
                        </a> 
                    </li>
                ))}
            </ul>
        </nav>
    )
}
