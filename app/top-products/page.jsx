'use client';
import { Box, Container, Pagination } from '@mui/material';
import { useSelector } from 'react-redux';
import ScrollUp from '@/hook/ScrollUp';
import { TopProductsList } from '@/sections';

export default function TopProductsPage() {
  const { topProducts } = useSelector((state) => state.topProducts);
  return (
    <Container maxWidth='xl'>
      <ScrollUp />
      <TopProductsList productsList={topProducts} />
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBlock: '2rem' }}>
        <Pagination count={10} />
      </Box>
    </Container>
  );
}
