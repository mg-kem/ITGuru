import ProductsHeader from '../../components/products-header';
import ProductsContainer from '../../components/products-container';
import { useAppDispatch } from '../../hooks/useStore';
import { fetchProductsAction } from '../../store/thunk/productsThunk';


function ProductsPage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(fetchProductsAction());

  return (
    <section className="products">
      <ProductsHeader />
      <ProductsContainer />
    </section>
  )
}

export default ProductsPage;