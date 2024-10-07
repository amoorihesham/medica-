'use client';
import { ProductCard, SectionHeading } from '@/components';
import { setProductsList } from '@/redux/slices/topProductsSlice';
import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function TopProductsList({ productsList }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProductsList(productsList));
  }, []);

  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '3rem' }}>
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
    </Container>
  );
}
