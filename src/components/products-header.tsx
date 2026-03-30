import { useState, useEffect } from 'react';
import { useAppDispatch } from '../hooks/useStore';
import { fetchProductsAction } from '../store/thunk/productsThunk';

function ProductsHeader() {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!query.trim()) {
        dispatch(fetchProductsAction(''));
        return;
      }
      dispatch(fetchProductsAction(query))
    }, 1000);

    return () => clearTimeout(timeout);
  }, [query]);

  const onChangeSearchInput: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setQuery(evt.target.value)
  }

  return (
    <div className="products__search">
      <h2 className="products__search-title">Товары</h2>
      <input type="text" className="products__search-input" placeholder='Найти' value={query} onChange={onChangeSearchInput} />
    </div>
  )
}

export default ProductsHeader;