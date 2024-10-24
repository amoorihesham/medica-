'use client';
import { Box, Container, Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ScrollUp from '@/hook/ScrollUp';
import { TopProductsList } from '@/sections';
import { useEffect } from 'react';
import { getTopProductsAsync } from '@/redux/asyncs/topProducts';
import { ProductCard, SectionHeading } from '@/components';

export default function TopProductsPage() {
  const { topProducts } = useSelector((state) => state.topProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopProductsAsync());
  }, [dispatch]);
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '3rem' }}>
      <ScrollUp />
      <SectionHeading title='Top Products' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
        {topProducts?.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))}
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBlock: '2rem' }}>
        <Pagination count={10} />
      </Box>
    </Container>
  );
}
