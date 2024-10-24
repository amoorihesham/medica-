'use client';
import { useEffect } from 'react';
import { CartItem } from '@/components';
import { getCartData } from '@/redux/asyncs/cartAsync';
import { Box, Button, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

export default function Cart() {
  const { user } = useSelector((state) => state.auth);

  const { cart, loading, error } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData(user?.token));
  }, [dispatch, user]);
  console.log(cart);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '3rem' }}>
      <Typography
        variant='h4'
        component='h1'
        color='primary'
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
                key={item.item_id}
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
      <Link
        className='w-1/3 mx-auto text-center text-white py-2 rounded-md uppercase bg-mBlue block hover:shadow-lg transition-shadow duration-300'
        href='/checkout'>
        checkout
      </Link>
    </Container>
  );
}
