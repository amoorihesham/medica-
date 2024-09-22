import { HotDealsList, PartnersList, ProductList, CategoriesList } from '@/sections';
import { RedLine, Slider } from '@/components';

const productsList = [
  {
    id: 1,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
  },
  {
    id: 2,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
  },
  {
    id: 3,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
  },
  {
    id: 4,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
  },
  {
    id: 5,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
  },
];
const categoriesList = [
  { id: 1, title: 'Medical' },
  { id: 1, title: 'Medical' },
  { id: 1, title: 'Medical' },
  { id: 1, title: 'Medical' },
  { id: 1, title: 'Medical' },
  { id: 1, title: 'Medical' },
];
export default function Home() {
  return (
    <>
      <RedLine />
      <Slider />
      <CategoriesList categoriesList={categoriesList} />
      <HotDealsList />
      <PartnersList />
      <ProductList
        title='All Products'
        productList={productsList}
      />
    </>
  );
}
