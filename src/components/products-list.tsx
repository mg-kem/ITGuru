import { Products } from '../mock/mock';
import { useState } from 'react';

function ProductsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.ceil(Products.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleProducts = Products.slice(startIndex, endIndex);

  console.log(totalPages);

  const nextPage = () => {
    setCurrentPage(page => Math.min(totalPages, page + 1))
  }

  const prevPage = () => {
    setCurrentPage(page => Math.max(1, page - 1));
  }


  return (
    <div className="search-result__main">
      <table className='products-table'>
        <thead className='table-header'>
          <tr>
            <th scope="col"><input type="checkbox" name="checkbox" id="checkbox-head" /></th>
            <th scope="col">Наименование</th>
            <th scope="col">Вендор</th>
            <th scope="col">Артикул</th>
            <th scope="col">Оценка</th>
            <th scope="col">Цена</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody className='table-body'>
          {visibleProducts.map((product) => (
            <tr key={product.id} >
              <td><input type="checkbox" name="checkbox" id={`checkbox-${product.id}`} /></td>
              <td>{product.name}</td>
              <td>{product.vendor}</td>
              <td>{product.article}</td>
              <td>{product.rating}</td>
              <td>{product.price}</td>
              <td>
                <button>+</button>
                <button>...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="products-pagination">
        <p className="products-pagination_info">Показано {startIndex + 1} - {endIndex} из {Products.length}</p>
        <div className="pagination-buttons">
          <button className="prev-page" onClick={prevPage}></button>
          <button className="next-page" onClick={nextPage}></button>
        </div>
      </div>
    </div>


  )
}

export default ProductsList;