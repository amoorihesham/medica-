'use client';
import { ProductCard, SectionHeading } from '@/components';
import { Box, Container } from '@mui/material';

export default function TopProductsList({ productsList }) {
  return (
    <Box>
      <SectionHeading title='Top Products' />
      <Box
        component='div'
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
        {productsList?.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))}
      </Box>
    </Box>
  );
}
