'use client';
import { Box } from '@mui/material';
import { ProductCard, SectionHeading } from '@/components';

export default function TopProductsList({ productList }) {
  return (
    <Box>
      <Box>
        <SectionHeading
          title='Top Products'
          url='/top-products'
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
    </Box>
  );
}
