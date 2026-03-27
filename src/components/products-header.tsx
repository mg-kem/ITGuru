function ProductsHeader() {
  return (
    <div className="products__search">
      <h2 className="products__search-title">Товары</h2>
      <input type="text" className="products__search-input" placeholder='Найти' />
    </div>
  )
}

export default ProductsHeader;