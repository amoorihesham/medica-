'use client';
import Image from 'next/image';
import { Box, Divider, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Flex, Button } from 'antd';
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
              component='h3'
              sx={{
                fontSize: {
                  xs: fonts.mobile8,
                  lg: fonts.mobile18,
                },
                fontWeight: 'bold',
                marginBottom: '.2rem',
              }}>
              {product.name}
            </Typography>
            <Typography
              component='h3'
              sx={{
                fontSize: {
                  xs: fonts.mobile10,
                  lg: fonts.mobile24,
                },
                fontWeight: 'bold',
                marginBottom: '.3rem',
                color: colors.primary,
              }}>
              EGP {product.price}
            </Typography>
            <Typography
              component='h3'
              sx={{
                fontSize: {
                  xs: fonts.mobile8,
                  lg: fonts.mobile18,
                },
                fontWeight: 'bold',
                marginBottom: '.3rem',
                color: colors.gray,
              }}>
              Get it by
              <Typography
                component='span'
                sx={{
                  fontSize: {
                    xs: fonts.mobile8,
                    lg: fonts.mobile18,
                  },
                  fontWeight: 'bold',
                  marginLeft: '.5rem',
                  color: colors.orange,
                }}>
                WED.Sep 16
              </Typography>
            </Typography>
            <Typography
              component='h3'
              sx={{
                fontSize: {
                  xs: fonts.mobile8,
                  lg: fonts.mobile18,
                },
                fontWeight: 'bold',
                marginBottom: '.5rem',
                color: colors.gray,
              }}>
              Sold by
              <Typography
                component='span'
                sx={{
                  fontSize: {
                    xs: fonts.mobile8,
                    lg: fonts.mobile18,
                  },
                  fontWeight: 'bold',
                  marginLeft: '.5rem',
                  color: colors.green,
                }}>
                {product.vendor}
              </Typography>
            </Typography>

            <Button
              onClick={() => {
                dispatch(removeCartItem({ userToken, cart_id: product.cart_id, remove: 1 }));
                toast.success('Product removed successfully');
              }}
              icon={
                <DeleteOutlineIcon sx={{ fontSize: { xs: fonts.mobile8, md: fonts.mobile14 } }} />
              }
              style={{
                color: colors.primary,
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '.3rem',
              }}>
              Remove
            </Button>
          </Box>
          <Flex
            align='center'
            gap={8}>
            <Button
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
