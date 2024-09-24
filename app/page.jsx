import { HotDealsList, PartnersList, ProductList, CategoriesList } from '@/sections';
import { RedLine, Slider, SeeMoreBtn, CategoriesNavbar } from '@/components';

const productsList = [
  {
    id: 1,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 2,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 3,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 4,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 5,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: false, value: '70' },
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
      <CategoriesNavbar />
      <RedLine title='Your Account Need To Be Activated.' />
      <Slider />
      <CategoriesList categoriesList={categoriesList} />
      <HotDealsList />
      <PartnersList />
      <ProductList
        title='All Products'
        productList={productsList}
      />
      <SeeMoreBtn url='/products' />
    </>
  );
}
