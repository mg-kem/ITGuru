import ProductsList from './products-list';
import { useAppDispatch } from '../hooks/useStore';
import { fetchProductsAction } from '../store/thunk/productsThunk';

function ProductsContainer() {
  const dispatch = useAppDispatch();

  const handleRefreshButton = () => {
    dispatch(fetchProductsAction());
  }

  return (
    <div className="products__search-result">
      <div className="search-result__header">
        <h2 className="search-result__title">Все позиции</h2>
        <div className="product-list__buttons">
          <button className="product-list__button-refresh" onClick={handleRefreshButton}></button>
          <button className="product-list__button-add">Добавить</button>
        </div>
      </div>
      <ProductsList />
    </div>
  )
}

export default ProductsContainer;