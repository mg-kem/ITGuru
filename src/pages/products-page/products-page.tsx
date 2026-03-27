import ProductsHeader from '../../components/products-header';
import ProductsContainer from '../../components/products-container';

function ProductsPage(): React.JSX.Element {
  return (
    <section className="products">

      <ProductsHeader />

      <ProductsContainer />

    </section>
  )
}

export default ProductsPage;