import { Container, Box, Pagination } from '@mui/material';
import { ProductList } from '@/sections';
import { RedLine } from '@/components';
import { getProduct } from '@/utils/productFunc';
import StateProvider from '@/components/Provider';

const Products = async () => {
  const topProductsList = await getProduct({ topProducts: 1 });
  return (
    <Box>
      <Container maxWidth='xl'>
        <StateProvider>
          <ProductList
            title='All Products'
            productList={topProductsList}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBlock: '2rem' }}>
            <Pagination count={10} />
          </Box>
        </StateProvider>
      </Container>
    </Box>
  );
};

export default Products;
