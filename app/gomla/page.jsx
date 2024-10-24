import { Slider, SearchGomla, GomlaProductCard, SectionHeading } from '@/components';
import { CategoriesList } from '@/sections';
import { Box, Container, Pagination } from '@mui/material';

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

const Gomla = () => {
  return (
    <>
      <Slider />
      <CategoriesList categorisList={categoriesList} />
      <Container
        maxWidth='xl'
        sx={{ marginTop: '2rem' }}>
        <SearchGomla />
        <SectionHeading title='Gomla Products' />
        <Box
          component='div'
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
          {productsList?.map((product) => (
            <GomlaProductCard
              key={product.id}
              product={product}
            />
          ))}
        </Box>
      </Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBlock: '2rem' }}>
        <Pagination count={10} />
      </Box>
    </>
  );
};

export default Gomla;
