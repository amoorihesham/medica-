import { HotDealsList, PartnersList, ProductList, CategoriesList } from '@/sections';
import { RedLine, Slider, SeeMoreBtn, CategoriesNavbar, GomlaMainBtn } from '@/components';
import { cookies } from 'next/headers';
import { Container } from '@mui/material';

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
  {
    id: 6,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 7,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 8,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 9,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 10,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: false, value: '70' },
  },
];
const categoriesList = [
  { id: 1, title: 'Medical' },
  { id: 2, title: 'Medical' },
  { id: 3, title: 'Medical' },
  { id: 4, title: 'Medical' },
  { id: 5, title: 'Medical' },
  { id: 6, title: 'Medical' },
  { id: 7, title: 'Medical' },
  { id: 8, title: 'Medical' },
  { id: 9, title: 'Medical' },
  { id: 10, title: 'Medical' },
];
export default function Home() {
  const cookiesStore = cookies();
  const user = JSON.parse(cookiesStore.get('user')?.value) || null;

  return (
    <>
      <RedLine
        title={
          user && user.activated
            ? 'You Will get A free shipping on oreder over than 1k.'
            : 'Your Account Need To Be Activated'
        }
      />
      <Slider />
      <CategoriesList categoriesList={categoriesList} />
      {user && (
        <>
          <Container maxWidth='xl'>
            <GomlaMainBtn />
          </Container>
          <HotDealsList />
          <PartnersList />
        </>
      )}
      <ProductList
        title='All Products'
        productList={productsList}
      />
      <SeeMoreBtn url='/products' />
    </>
  );
}
