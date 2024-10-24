'use client';
import Image from 'next/image';
import { Box, Button, Divider, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Flex } from 'antd';
import { colors, fonts } from '@/styles';
import productImage from '@/assets/product/OIP.png';
import { useDispatch } from 'react-redux';
import { addCartItem, removeCartItem } from '@/redux/asyncs/cartAsync';
import { toast } from 'react-toastify';
export default function CartItem({ product, userToken }) {
  const dispatch = useDispatch();
  return (
    <Box sx={{ padding: '1rem 0' }}>
      <Flex align='center'>
        <Box>
          <Image
            src={productImage}
            alt='Product Image'
            width={150}
            height={250}
          />
        </Box>
        <Divider
          orientation='vertical'
          flexItem
          sx={{ marginRight: '1rem' }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Box>
            <Typography
              variant='h3'
              component='h1'>
              {product.name}
            </Typography>
            <Typography
              variant='h6'
              component='h2'
              fontWeight={700}
              color='primary'>
              EGP {product.price}
            </Typography>
            <Typography
              variant='h6'
              color='primary.dark'
              component='h3'>
              Get it by
              <Typography
                variant='h6'
                component='span'
                fontWeight={700}
                marginLeft='.5rem'
                sx={{
                  color: colors.orange,
                }}>
                WED.Sep 16
              </Typography>
            </Typography>
            <Typography
              variant='h6'
              color='primary.dark'
              component='h3'>
              Sold By
              <Typography
                variant='h6'
                color='success.light'
                component='span'
                fontWeight={700}
                marginLeft='.5rem'>
                {product.vendor}
              </Typography>
            </Typography>

            <Button
              variant='outlined'
              size='small'
              onClick={() => {
                dispatch(removeCartItem({ userToken, cart_id: product.cart_id, remove: 1 }));
                toast.success('Product removed successfully');
              }}
              startIcon={<DeleteOutlineIcon fontSize='medium' />}>
              Remove
            </Button>
          </Box>
          <Flex
            align='center'
            gap={8}>
            <Button
              variant='outlined'
              size='small'
              disabled={product.quantity == 1}
              onClick={() => {
                dispatch(removeCartItem({ userToken, cart_id: product.cart_id, remove: 0 }));
                toast.success('Product Quantity Updated successfully');
              }}>
              -
            </Button>
            <Typography
              component='p'
              sx={{
                fontSize: {
                  xs: fonts.mobile8,
                  lg: fonts.mobile16,
                },
              }}>
              {product.quantity}
            </Typography>
            <Button
              variant='outlined'
              size='small'
              onClick={() => {
                dispatch(
                  addCartItem({
                    userToken,
                    item_id: product.item_id,
                    store_id: product.vendor_id,
                    quantity: 1,
                  })
                );
                toast.success('Product Quantity Updated successfully');
              }}>
              +
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
