'use client';
import { ProductCard, SectionHeading } from '@/components';
import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProductsList } from '@/redux/slices/allProductsSlice';

const ProductList = ({ productList, title, url }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProductsList(productList));
  }, []);
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '3rem' }}>
      <SectionHeading
        title={title}
        url={url}
      />
      <Box
        component='div'
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
        {productList?.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))}
      </Box>
    </Container>
  );
};

export default ProductList;
