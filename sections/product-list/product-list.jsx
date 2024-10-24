'use client';
import { Box } from '@mui/material';
import { ProductCard, SectionHeading } from '@/components';

const ProductList = ({ productList }) => {
  return (
    <Box>
      <SectionHeading
        title='All Products'
        url='/products'
      />
      <Box
        sx={{
          overflowX: 'scroll',
          whiteSpace: 'nowrap',
          width: '100%',
          display: 'flex',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}>
        <Box
          component='div'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '2rem',
          }}>
          {productList?.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductList;
