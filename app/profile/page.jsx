'use client';
import { AuthModal } from '@/components/Auth';
import { LanguagePopup } from '@/components/Popups';
import StateProvider from '@/components/Provider';
import { logout } from '@/redux/slices/authSlice';
import {
  FavoriteBorder,
  GroupAdd,
  Help,
  InsertDriveFile,
  KeyboardArrowRightOutlined,
  Language,
  Logout,
  Person,
  Phone,
} from '@mui/icons-material';
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function ProfilePage() {
  const [open, setOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const router = useRouter();

  return (
    <>
      <StateProvider>
        <Container
          maxWidth='xl'
          sx={{ marginTop: '1.5rem' }}>
          <Typography variant='h4'>My Account</Typography>

          <button
            onClick={() => setOpenDetails(true)}
            className='mt-5 text-teal-900 flex items-center gap-2 p-2 hover:bg-gray-50 transition-colors duration-300 rounded-md'>
            <GroupAdd />
            Add Another Account
          </button>

          <Divider sx={{ marginBlock: '1.5rem' }} />
          <Stack
            marginTop='1.5rem'
            spacing={3}>
            <div className='text-sm flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 transition-colors duration-200 font-semibold'>
              <span>Your Wallet</span> 0.00
            </div>
            <div className='text-sm flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 transition-colors duration-200'>
              <span
                className='flex items-center gap-2'
                onClick={() => router.push('/profile/details')}>
                <Person />
                Account Details
              </span>
              <KeyboardArrowRightOutlined />
            </div>
            <div className='text-sm flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 transition-colors duration-200'>
              <span className='flex items-center gap-2'>
                <FavoriteBorder /> Wishlist
              </span>
              <KeyboardArrowRightOutlined />
            </div>
            <div className='text-sm flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 transition-colors duration-200'>
              <span className='flex items-center gap-2'>
                <Help /> FAQ
              </span>
              <KeyboardArrowRightOutlined />
            </div>
            <div className='text-sm flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 transition-colors duration-200'>
              <span className='flex items-center gap-2'>
                <InsertDriveFile /> Terms & Conditions
              </span>
              <KeyboardArrowRightOutlined />
            </div>
            <div
              onClick={() => setOpen(true)}
              className='text-sm flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 transition-colors duration-200'>
              <span className='flex items-center gap-2'>
                <Language /> Language
              </span>
              <KeyboardArrowRightOutlined />
            </div>
            <div className='text-sm flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 transition-colors duration-200'>
              <span className='flex items-center gap-2'>
                <Phone /> Contact Us
              </span>
              <KeyboardArrowRightOutlined />
            </div>
            <div
              onClick={() => {
                localStorage.clear();
                window.location.replace('/');
              }}
              className='text-sm flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 transition-colors duration-200 text-red-600'>
              <span className='flex items-center gap-2'>
                <Logout /> Logout
              </span>
            </div>
          </Stack>
        </Container>
        <AuthModal
          open={openDetails}
          setOpen={setOpenDetails}
        />
        <LanguagePopup
          open={open}
          setOpen={setOpen}
        />
      </StateProvider>
    </>
  );
}
