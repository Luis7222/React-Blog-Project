import { useState } from "react";
import { useEffect } from 'react';

export const DOTS = "...";

function usePagination(totalPages, currentPage, pageRange = 2) {
  /*
    This hook generates an array representing pagination to be displayed.
    
    Parameters:
    - totalPages: Total number of pages.
    - currentPage: Current active page.
    - pageRange: Number of pages to show on each side of the current page.

    Returns:
    - An array representing the pagination to be displayed.
  */

  const [pages, setPages] = useState([]);

  // Helper function to generate page numbers in a range
  const generatePageNumbers = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  // Logic to generate pagination array
  const updatePagination = () => {
    if (totalPages <= 1) {
      setPages([]);
      return;
    }

    let startPage = Math.max(1, currentPage - pageRange);
    let endPage = Math.min(totalPages, currentPage + pageRange);

    if (currentPage - pageRange <= 1) {
      endPage = Math.min(totalPages, 2 * pageRange + 1);
    }

    if (currentPage + pageRange >= totalPages) {
      startPage = Math.max(1, totalPages - 2 * pageRange);
    }

    const paginationArray = [];

    if (startPage > 1) {
      paginationArray.push(1);
      if (startPage > 2) {
        paginationArray.push(DOTS);
      }
    }

    paginationArray.push(...generatePageNumbers(startPage, endPage));

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationArray.push(DOTS);
      }
      paginationArray.push(totalPages);
    }

    setPages(paginationArray);
  };

  // Update pagination whenever the total pages or current page changes
  useEffect(() => {
    updatePagination();
  }, [totalPages, currentPage]);

  return pages;
}

export default usePagination;
