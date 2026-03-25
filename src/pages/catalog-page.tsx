function Catalog(): React.JSX.Element {
  return (
    <section className="products">
      <div className="products__search">
        <h2 className="products__search-title">Товары</h2>
        <input type="text" className="products__search-input" placeholder='Найти' />
      </div>

      <div className="products__search-result">
        <div className="search-result__header">
          <h2 className="search-result__title">Все позиции</h2>
          <div className="product-list__buttons">
            <button className="refresh"></button>
            <button className="add-product">Добавить</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catalog;