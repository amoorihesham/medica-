import DynamicPage from '@/components/DynamicPage';
import { getProduct } from '@/utils/productFunc';

export async function generateStaticParams() {
  let products = await getProduct({ allItems: 1 });
  let array = products.map((product) => ({ id: product.id.toString() }));
  return array;
}

const Product = ({ params }) => {
  return <DynamicPage params={params} />;
};

export default Product;
