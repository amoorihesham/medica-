import Image from 'next/image';
import { Box, Button, Divider, Typography } from '@mui/material';
import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import product from '@/assets/product/OIP.png';

export default function HotDealCard() {
  return (
    <Box
      component='div'
      className=' bg-red-100  border border-gray-100 relative rounded-md pb-2 shadow-md hover:-translate-y-4 duration-500 transition-all'
    >
      <Typography
        component='p'
        className='absolute bg-green-500 px-2 py-1 text-xs text-white font-bold rounded-sm top-0 left-0'
      >
        33% Discount
      </Typography>
      <Box
        component='div'
        className='card-heading flex justify-between pt-2 px-2'
      >
        <Image
          src={product}
          alt='asdadad'
          width={200}
          height={200}
        />

        <Box>
          <FavoriteBorderOutlined />
        </Box>
      </Box>
      <Divider
        component='hr'
        className='my-2 border-red-200'
      />
      <Box
        component='div'
        className='card-body  px-2'
      >
        <Typography
          component='h5'
          className='text-xl uppercase '
        >
          Title
        </Typography>
        <Box
          component='div'
          className='product-details flex justify-between mt-1 items-center'
        >
          <Typography
            component='p'
            className='font-bold text-gray-500'
          >
            Price: 88EGP
          </Typography>
          <Button
            variant='link'
            className=' hover:text-mBlue justify-end p-0'
          >
            <ShoppingCartOutlined sx={{ fontSize: '24px', padding: '0' }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
