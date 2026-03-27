import ProductsList from './products-list';

function ProductsContainer() {
  return (
    <div className="products__search-result">
      <div className="search-result__header">
        <h2 className="search-result__title">Все позиции</h2>
        <div className="product-list__buttons">
          <button className="refresh">Обновить</button>
          <button className="add-product">Добавить</button>
        </div>
      </div>
      <ProductsList />
    </div>
  )
}

export default ProductsContainer;