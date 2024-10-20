'use client';
import Image from 'next/image';
import { Box, Button, Divider, Typography } from '@mui/material';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import product from '@/assets/product/product.png';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { AuthModal } from '@/components/Auth';
import { useState } from 'react';

export default function HotDealCard({ hotDeal }) {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box padding='1rem'>
        <Box
          sx={{
            bgcolor: '#A2FF86',
            padding: '.6rem 1.3rem',
            borderTopLeftRadius: '1rem',
            borderTopRightRadius: '1rem',
            boxShadow: '0px 7px 5px 0px rgb(0 0 0 / 19%)',
          }}>
          <Typography>Health & Wellness deals</Typography>
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          marginTop='1rem'
          borderBottom={1}
          borderColor={'#1B6B93'}>
          <Image
            src={product}
            alt='Product image'
            style={{ maxWidth: '100%' }}
          />
        </Box>
        <Box
          sx={{
            marginTop: '.5rem',
            padding: '.3rem 1rem ',
            borderRadius: '6px',
            boxShadow: '1px 5px 5px 0px rgb(0 0 0 / 19%)',
            bgcolor: '#FFF7F7',
          }}>
          <Typography fontFamily={400}>Man care </Typography>
          <Typography fontWeight={400}>Up to 20% off</Typography>
        </Box>
      </Box>

      <AuthModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
