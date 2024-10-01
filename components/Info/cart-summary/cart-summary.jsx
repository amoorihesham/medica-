'use client';
import { colors, fonts } from '@/styles';
import { Typography, Box, Button } from '@mui/material';
import { Divider } from 'antd';

export default function CartSummary() {
  const location = window.location.pathname.split('/')[1];
  const check = ['checkout', 'place-order'];

  return (
    <Box
      sx={{
        padding: '1rem',
        width: {
          xs: '250px',
          sm: '450px',
        },
      }}
      border={1}
      borderColor={colors.borderColor}
    >
      <Typography
        variant='h5'
        component='h5'
        sx={{ marginBottom: '1rem' }}
      >
        Order Summary
      </Typography>
      {check.includes(location) ? null : (
        <form sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <input
            className='bg-mpink rounded-l-md py-3 px-2 w-2/3 outline-none'
            placeholder='Coupon Code'
          />
          <button className='bg-mBlue text-white rounded-r-md py-3 w-1/3'>Add</button>
        </form>
      )}

      <Box sx={{ margin: '1rem 0' }}>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem',
            fontSize: {
              xs: fonts.mobile18,
              lg: fonts.mobile20,
            },
          }}
        >
          Subtotal ( 2 Item)
          <Typography
            sx={{
              fontSize: {
                xs: fonts.mobile18,
                lg: fonts.mobile20,
              },
            }}
            component='span'
          >
            EGP 88
          </Typography>
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem',
            fontSize: {
              xs: fonts.mobile18,
              lg: fonts.mobile20,
            },
          }}
        >
          Shipping Fee{' '}
          <Typography
            sx={{
              fontSize: {
                xs: fonts.mobile18,
                lg: fonts.mobile20,
              },
            }}
            component='span'
          >
            EGP 25
          </Typography>
        </Typography>
        <Divider />
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: {
              xs: fonts.mobile18,
              lg: fonts.mobile20,
            },
          }}
        >
          Total ( inclusive of VAT) <Typography component='span'>EGP 88.00</Typography>
        </Typography>
      </Box>
      {check.includes(location) ? null : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '.5rem',
            margin: '1.2rem 0',
          }}
        >
          <Button
            type='link'
            href='/products'
            variant='outlined'
            size='large'
            sx={{ color: colors.textBlack, borderColor: colors.textBlack, flexGrow: '1' }}
          >
            Add Items
          </Button>
          <Button
            type='link'
            href='/checkout'
            variant='contained'
            size='large'
            sx={{ backgroundColor: colors.primary, color: colors.primaryText, flexGrow: '1' }}
          >
            Checkout
          </Button>
        </Box>
      )}
    </Box>
  );
}
