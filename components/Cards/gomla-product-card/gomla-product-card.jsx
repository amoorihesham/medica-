import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Divider, Typography } from '@mui/material';
import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import productImg from '@/assets/product/OIP.png';

export default function GomlaProductCard({ product }) {
  return (
    <Box
      component='div'
      className=' bg-white  border border-gray-100  rounded-md pb-2 shadow-md hover:scale-105 transition-all duration-500'>
      <Box
        component='div'
        className='card-heading flex justify-between pt-2 px-2'>
        <Link href={`/gomla/1`}>
          <Image
            src={productImg}
            alt='asdadad'
            className='w-50'
          />
        </Link>

        <Box>
          <FavoriteBorderOutlined className='text-[#164B60]' />
        </Box>
      </Box>
      <Divider />
      <Box
        component='div'
        className='card-body  px-2'>
        <Link href={`/gomla/${product.id}`}>
          <Typography
            component='h5'
            className='text-[18px] mt-2 uppercase '>
            {product.title}
          </Typography>
        </Link>
        <Box
          component='div'
          className='product-details flex justify-between items-end mt-1'>
          <Typography
            component='p'
            className='font-normal mt-10 text-[#164B60]'>
            Price: 88EGP
          </Typography>
          <Button
            variant='link'
            className=' hover:text-mBlue justify-end p-0'>
            <ShoppingCartOutlined className='text-[#164B60]' sx={{ fontSize: '24px', padding: '0' }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
