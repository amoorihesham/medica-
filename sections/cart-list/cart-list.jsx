'use client';
import { useEffect } from 'react';
import { CartItem } from '@/components';
import { getCartData } from '@/redux/asyncs/cartAsync';
import { Box, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export default function CartList() {
  const { cart, loading, error } = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    dispatch(getCartData(user.token));
  }, []);
  if (loading) {
    return (
      <Container
        maxWidth='xl'
        sx={{ marginTop: '3rem' }}>
        Loading...
      </Container>
    );
  }
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '3rem' }}>
      <Typography
        variant='h4'
        component='h1'
        sx={{ fontSize: '28px' }}>
        Cart ({cart?.total_items || 0})
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column',
            lg: 'row',
          },
        }}>
        <Box>
          {cart?.items?.length > 0 ? (
            cart?.items?.map((item) => (
              <CartItem
                product={item}
                key={item.id}
                userToken={user.token}
              />
            ))
          ) : (
            <Typography
              marginTop={5}
              textAlign='center'
              variant='h5'>
              No Items In Your Cart
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}
