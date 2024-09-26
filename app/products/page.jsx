import { Container, Box } from '@mui/material';
import { ProductList } from '@/sections';
import { CategoriesNavbar, RedLine } from '@/components';

const Products = () => {
  return (
    <Box>
      <RedLine title='Order More Than 500L.E To Have Free Shipping.' />
      <Container maxWidth='xl'>
        <ProductList
          title='All Products'
          productList={[
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
          ]}
        />
      </Container>
    </Box>
  );
};

export default Products;
