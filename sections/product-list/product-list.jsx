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
    </Container>
  );
};

export default ProductList;
