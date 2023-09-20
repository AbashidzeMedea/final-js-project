import {
    fetchAndDisplayProducts,
    sortProductsByPriceAscending,
    sortProductsByPriceDescending,
    resetSorting,
  } from './sort.js';
 
  fetchAndDisplayProducts();

  document.getElementById('ascendingButton').addEventListener('click', () => {
    sortProductsByPriceAscending();
  });
  
  document.getElementById('descendingButton').addEventListener('click', () => {
    sortProductsByPriceDescending();
  });
  
  document.getElementById('resetButton').addEventListener('click', () => {
    resetSorting();
  });
  