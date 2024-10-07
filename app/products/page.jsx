import { Container, Box } from '@mui/material';
import { ProductList } from '@/sections';
import { RedLine } from '@/components';
import { getProduct } from '@/utils/productFunc';
import StateProvider from '@/components/Provider';

const Products = async () => {
  const topProductsList = await getProduct({ topProducts: 1 });
  return (
    <Box>
      <RedLine title='Order More Than 500L.E To Have Free Shipping.' />
      <Container maxWidth='xl'>
        <StateProvider>
          <ProductList
            title='All Products'
            productList={topProductsList}
          />
        </StateProvider>
      </Container>
    </Box>
  );
};

export default Products;
