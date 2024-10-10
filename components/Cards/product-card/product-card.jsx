'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography, Divider, Button } from '@mui/material';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { AuthModal } from '@/components/Auth';

const ProductCard = ({ product }) => {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        component='div'
        className={` bg-white  border border-gray-100 relative rounded-md pb-2 shadow-md ${
          product?.in_stock && `hover:scale-105`
        } transition-all duration-500`}>
        <Typography
          component='p'
          className={`absolute ${
            product?.in_stock ? 'bg-green-500' : 'bg-red-500'
          }  px-2 py-1 text-xs text-white font-bold rounded-sm top-0 left-0`}>
          {product?.in_stock ? `${product?.discount} % Discount` : 'Out Of Stock'}
        </Typography>
        {product?.in_stock ? (
          user ? (
            <Link href={`/products/${product?.id}`}>
              <Box
                component='div'
                className='card-heading flex justify-between pt-2 px-2'>
                <Image
                  src={product?.image}
                  width={200}
                  height={200}
                  alt='product image'
                />
                <Box>
                  <FavoriteBorderOutlined sx={{ color: '#164B60' }} />
                </Box>
              </Box>
            </Link>
          ) : (
            <Box
              component='div'
              className='card-heading flex justify-between pt-2 px-2'
              onClick={() => setOpen(true)}>
              <Image
                src={product?.image}
                width={200}
                height={200}
                alt='product image'
              />
              <Box>
                <FavoriteBorderOutlined sx={{ color: '#164B60' }} />
              </Box>
            </Box>
          )
        ) : (
          <Box
            component='div'
            className='card-heading flex justify-between pt-2 px-2'>
            <Image
              src={product?.image}
              width={200}
              height={200}
              alt='product image'
            />
            <Box>
              <FavoriteBorderOutlined sx={{ color: '#164B60' }} />
            </Box>
          </Box>
        )}

        <Divider sx={{ marginInline: '8px' }} />
        <Box
          component='div'
          className='card-body  px-2'>
          {user ? (
            <Link href={`/products/${product.id}`}>
              <Typography
                component='h5'
                className='text-xl text-normal uppercase mt-4 '>
                {product?.name}
              </Typography>
            </Link>
          ) : (
            <Typography
              component='h5'
              className='text-xl text-normal uppercase mt-4 '>
              {product?.name}
            </Typography>
          )}
          <Box
            component='div'
            className='product-details flex justify-between items-center mt-1'>
            {product?.in_stock && (
              <>
                {user ? (
                  <Typography
                    component='p'
                    className='font-bold text-header_color'>
                    Start from: {product?.start_price}EGP
                  </Typography>
                ) : (
                  <Typography
                    component='p'
                    className='font-bold text-header_color cursor-pointer'
                    onClick={() => setOpen(true)}>
                    Price
                  </Typography>
                )}
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
      <AuthModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default ProductCard;
