'use client';
import Image from 'next/image';
import { Box, Button, Divider, Typography } from '@mui/material';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import product from '@/assets/product/OIP.png';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { AuthModal } from '@/components/Auth';
import { useState } from 'react';

export default function HotDealCard({ hotDeal }) {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        component='div'
        className=' bg-red-100  border border-gray-100 relative rounded-md pb-2 shadow-md hover:-translate-y-4 duration-500 transition-all'>
        <Typography
          component='p'
          className='absolute bg-green-500 px-2 py-1 text-xs text-white font-bold rounded-sm top-0 left-0'>
          {hotDeal?.discount && hotDeal?.discount}% Discount
        </Typography>
        <Box
          component='div'
          className='card-heading flex justify-between pt-2 px-2'>
          {user ? (
            <Link href={`/products/${hotDeal.id}`}>
              <Image
                src={hotDeal?.image}
                alt='hot deal image'
                width={200}
                height={200}
              />
            </Link>
          ) : (
            <Image
              onClick={() => setOpen(true)}
              src={hotDeal?.image}
              alt='hot deal image'
              width={200}
              height={200}
              className=' cursor-pointer'
            />
          )}

          <Box>
            <FavoriteBorderOutlined sx={{ color: '#164B60' }} />
          </Box>
        </Box>
        <Divider sx={{ marginInline: '8px' }} />
        <Box
          component='div'
          className='card-body  px-2'>
          {user ? (
            <Link href={`/products/${hotDeal.id}`}>
              <Typography
                component='h5'
                className='text-xl text-normal uppercase '>
                {hotDeal?.name}
              </Typography>
            </Link>
          ) : (
            <Typography
              component='h5'
              className='text-xl text-normal uppercase '>
              {hotDeal?.name}
            </Typography>
          )}
          <Box
            component='div'
            className='product-details flex justify-between mt-1 items-center'>
            {user ? (
              <Typography
                component='p'
                className='font-bold text-header_color'>
                Start from: {hotDeal?.start_price && hotDeal?.start_price}EGP
              </Typography>
            ) : (
              <button onClick={() => setOpen(true)}>Price</button>
            )}
            <Button
              variant='link'
              className=' hover:text-mBlue text-header_color justify-end p-0'>
              <KeyboardArrowRightIcon sx={{ fontSize: '24px', padding: '0' }} />
            </Button>
          </Box>
        </Box>
      </Box>
      <AuthModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
