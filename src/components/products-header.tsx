import { useState, useEffect } from 'react';
import { useAppDispatch } from '../hooks/useStore';
import { fetchProductsAction } from '../store/thunk/productsThunk';
import { useDebounce } from '../hooks/useDebounce';

function ProductsHeader() {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

  const debouncedQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      dispatch(fetchProductsAction(''));
      return;
    }
    dispatch(fetchProductsAction(debouncedQuery));
  }, [debouncedQuery]);

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