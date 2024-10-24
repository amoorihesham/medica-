'use client';
import { Container, Box, Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductsAsync } from '@/redux/asyncs/products';
import { ProductCard, SectionHeading } from '@/components';

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(products);
  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '3rem' }}>
      <SectionHeading title='All Products' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
        {products?.map((product) => (
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
};

export default Products;
