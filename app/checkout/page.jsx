import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import { CartSummary } from '@/components';

export default function Checkout() {
  return (
    <Box>
      <Container
        maxWidth='xl'
        sx={{ marginTop: '1rem' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              md: 'row',
              lg: 'row',
            },
          }}>
          <form className='w-full md:w-2/3 mb-5'>
            <Box>
              <Typography
                variant='h5'
                component='h1'>
                Contact
              </Typography>
              <input
                type='text'
                className='w-full mt-3 bg-mpink py-2 px-3 rounded-md placeholder:text-sm placeholder:text-gray-400 outline-none'
                placeholder='Full name'
              />
              <input
                type='tel'
                className='w-full mt-3 bg-mpink py-2 px-3 rounded-md placeholder:text-sm placeholder:text-gray-400 outline-none'
                placeholder='Phone number'
              />
            </Box>
            <Box sx={{ marginTop: '2rem' }}>
              <Typography
                variant='h5'
                component='h1'>
                Shipping Details
              </Typography>
              <select className='w-full mt-3 bg-mpink py-2 px-3 rounded-md placeholder:text-sm placeholder:text-gray-400 outline-none'>
                <option value='1'>Region 1</option>
                <option value='2'>Region 2</option>
                <option value='3'>Region 3</option>
              </select>
              <input
                type='text'
                className='w-full mt-3 bg-mpink py-2 px-3 rounded-md placeholder:text-sm placeholder:text-gray-400 outline-none'
                placeholder='Street address'
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input
                  type='text'
                  className='w-full mt-3 bg-mpink py-2 px-3 rounded-md placeholder:text-sm placeholder:text-gray-400 outline-none'
                  placeholder='Building number'
                />
                <input
                  type='text'
                  className='w-full mt-3 bg-mpink py-2 px-3 rounded-md placeholder:text-sm placeholder:text-gray-400 outline-none'
                  placeholder='Nearest landmark'
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input
                  type='text'
                  className='w-full mt-3 bg-mpink py-2 px-3 rounded-md placeholder:text-sm placeholder:text-gray-400 outline-none'
                  placeholder='City'
                />
                <select className='w-full mt-3 bg-mpink py-2 px-3 rounded-md placeholder:text-sm placeholder:text-gray-400 outline-none'>
                  <option value='1'>Region 1</option>
                  <option value='2'>Region 2</option>
                  <option value='3'>Region 3</option>
                </select>
                <input
                  type='text'
                  className='w-full mt-3 bg-mpink py-2 px-3 rounded-md placeholder:text-sm placeholder:text-gray-400 outline-none'
                  placeholder='Postal code'
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginTop: '1rem' }}>
              <input
                type='checkbox'
                id='save'
                className='rounded-lg'
              />
              <label htmlFor='save'>Save This Information To next time.</label>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <button className='w-1/2 mx-auto text-center text-white py-2 rounded-md uppercase bg-mBlue block hover:shadow-lg transition-shadow duration-300'>
                Place Order
              </button>
            </Box>
          </form>
          <CartSummary />
        </Box>
      </Container>
    </Box>
  );
}
