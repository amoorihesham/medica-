import DynamicPage from "@/components/DynamicPage";
import { getProduct } from "@/utils/productFunc";


export async function generateStaticParams() {
  let products = await getProduct({ allItems: 1 });
  let array = products.map(product => ( {id:product.id.toString()} ))
  console.log("array",array);
  return array
}

const Product = ({ params }) => {
  console.log("params",params);
  return <DynamicPage params={params} />
};

export default Product;
