import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography, Divider, Button } from '@mui/material';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import productImg from '@/assets/product/product.png';

const ProductCard = ({ product }) => {
  return (
    <Box
      component='div'
      className={` bg-white  border border-gray-100 relative rounded-md pb-2 shadow-md ${product?.in_stock &&`hover:scale-105`} transition-all duration-500`}>
      <Typography
        component='p'
        className={`absolute ${
          product?.in_stock ? 'bg-green-500' : 'bg-red-500'
        }  px-2 py-1 text-xs text-white font-bold rounded-sm top-0 left-0`}>
        {product?.in_stock ? `${product?.discount} % Discount` : 'Out Of Stock'}
      </Typography>
      <Box
        component='div'
        className='card-heading flex justify-between pt-2 px-2'>
          {product?.in_stock ?   <Link href={`/products/${product?.id}`}>
          <Image
            src={product?.image}
            width={200}
            height={200}
            alt='product image'
          />
        </Link>:
          <Image
            src={product?.image}
            width={200}
            height={200}
            alt='product image'
          />
       }
     
        <Box>
          <FavoriteBorderOutlined sx={{ color: '#164B60' }} />
        </Box>
      </Box>
      <Divider sx={{ marginInline: '8px' }} />
      <Box
        component='div'
        className='card-body  px-2'>
        <Link href='/products/5'>
          <Typography
            component='h5'
            className='text-xl text-normal uppercase mt-4 '>
            {product?.name}
          </Typography>
        </Link>
        <Box
          component='div'
          className='product-details flex justify-between items-center mt-1'>
          {product?.in_stock && (
            <>
              <Typography
                component='p'
                className='font-bold text-header_color'>
                Start from: {product?.start_price}EGP
              </Typography>
              <Button
                variant='link'
                className=' hover:text-mBlue text-header_color justify-end p-0'>
                <KeyboardArrowRightIcon sx={{ fontSize: '24px', padding: '0' }} />
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
