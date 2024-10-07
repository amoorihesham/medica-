import { cookies } from 'next/headers';
import { ProductCard, SectionHeading } from '@/components';
import { Box, Container, Grid2 } from '@mui/material';

const ProductList = ({ productList, title }) => {
  const cookiesStore = cookies();
  const user = null // JSON.parse(cookiesStore.get('user')?.value) || null;

  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '3rem' }}
    >
      
      <SectionHeading title={title} />
      <Box
        component='div'
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'
      >
        {productList?.map((product) => (
          <ProductCard
            product={product}
            user={user}
            key={product.id}
          />
        ))}
      </Box>
    </Container>
  );
};

export default ProductList;
