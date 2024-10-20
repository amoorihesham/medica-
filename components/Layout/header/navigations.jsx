'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Typography,
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  Button,
  Box,
} from '@mui/material';
import {
  HomeOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
  AssignmentOutlined,
  AddOutlined,
  LanguageOutlined,
  AddLocationOutlined,
  LocationOn,
} from '@mui/icons-material';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { colors } from '@/styles';
import { RegisterLoginBtn } from '@/components';
import logo from '@/assets/branding/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/redux/slices/authSlice';
import { LanguagePopup } from '@/components/Popups';
import { usePathname } from 'next/navigation';

const styles = {
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContnet: 'center',
    fontSize: '16px',
    padding: '0',
    margin: '0',
  },
  listitem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
  },
  bulkbutton: {
    display: 'flex',
    alignItems: 'center',
    justifyContnet: 'center',
    fontSize: '16px',
    padding: '5px 8px',
    margin: '0',
    color: colors.textBlack,
    backgroundColor: colors.lightGreen,
  },
  language: {
    display: 'flex',
    alignItems: 'center',
    justifyContnet: 'center',
    fontSize: '16px',
    padding: '0',
    margin: '0',
    color: colors.textBlack,
    textTransform: 'unset',
  },
};
export default function Navigations() {
  const curPath = usePathname();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('user') != null) {
      dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
    }
  }, []);
  return (
    <>
      <AppBar
        component='nav'
        sx={{
          backgroundColor: colors.primary,
          boxShadow: 'unset',
          position: 'unset',
        }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
            alignItems: 'center',
          }}>
          <Box
            display='flex'
            gap={5}>
            <Link
              href='/'
              className='flex items-end gap-2 hover:text-white'
              style={{ flexGrow: '1' }}>
              <Image
                src={logo}
                alt='Logo'
                width={64}
                height={64}
              />
              <Typography
                variant='body2'
                component='p'>
                MedicaPlus
              </Typography>
            </Link>
            <Typography
              display='flex'
              alignItems='center'
              gap='.1rem'>
              <LocationOn />
              Deliver to
            </Typography>
          </Box>

          <IconButton
            edge='start'
            color='inherit'
            onClick={() => setOpen(!open)}
            sx={{
              display: {
                xs: 'flex',
                lg: 'none',
              },
            }}>
            <DensityMediumIcon />
          </IconButton>
          <ul className='hidden xl:flex items-center p-0 m-0 gap-5'>
            {user ? (
              <>
                <li>
                  <Link
                    href='/'
                    className={
                      curPath === '/'
                        ? 'hover:text-white flex items-center gap-1 py-1 px-3 border-b'
                        : 'hover:text-white flex items-center gap-1 py-1 px-3'
                    }>
                    <HomeOutlined /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      curPath === '/cart'
                        ? 'hover:text-white flex items-center gap-1 py-1 px-3 border-b'
                        : 'hover:text-white flex items-center gap-1 py-1 px-3'
                    }
                    href='/cart'>
                    <ShoppingCartOutlined />
                    My Cart
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      curPath === '/orders'
                        ? 'hover:text-white flex items-center gap-1 py-1 px-3 border-b'
                        : 'hover:text-white flex items-center gap-1 py-1 px-3'
                    }
                    href='/orders'>
                    <AssignmentOutlined />
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href='/gomla'
                    className='hover:text-white flex items-center gap-1 py-1 px-3 bg-[#A2FF86]'>
                    <AddOutlined className='text-[#363839]' />
                    <span className='text-[#363839]'>Bulk Request</span>
                  </Link>
                </li>
                <li>
                  <button
                    className='hover:text-white flex items-center gap-1 py-1 px-3'
                    onClick={() => setOpenLang(true)}>
                    <LanguageOutlined />
                    Language
                  </button>
                </li>
                <li>
                  <Link
                    className={
                      curPath === '/profile'
                        ? 'hover:text-white flex items-center gap-1 py-1 px-3 border-b'
                        : 'hover:text-white flex items-center gap-1 py-1 px-3'
                    }
                    href='/profile'>
                    <PersonOutlined /> Hi, {user.user.name}
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button
                    className='hover:text-white flex items-center gap-1 py-1 px-3'
                    onClick={() => setOpenLang(true)}>
                    <LanguageOutlined />
                    Language
                  </button>
                </li>
                <RegisterLoginBtn />
              </>
            )}
          </ul>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor='right'
        open={open}
        onClose={() => setOpen(!open)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#164b60', // Change background color
            width: '240px', // Custom width
            padding: '1rem', // Add padding
          },
        }}>
        <ul className='flex flex-col gap-2'>
          {user ? (
            <>
              <li className='hover:bg-gray-200 text-white hover:text-black transition-colors duration-300 rounded-md'>
                <Link
                  href='/'
                  className=' flex items-center gap-1 py-2 px-3'>
                  <HomeOutlined /> Home
                </Link>
              </li>
              <li className='hover:bg-gray-200 text-white hover:text-black transition-colors duration-300 rounded-md'>
                <Link
                  href='/cart'
                  className='flex items-center gap-1 py-2 px-3'>
                  <ShoppingCartOutlined />
                  My Cart
                </Link>
              </li>
              <li className='hover:bg-gray-200 text-white hover:text-black transition-colors duration-300 rounded-md'>
                <Link
                  href='/orders'
                  className='flex items-center gap-1 py-2 px-3'>
                  <AssignmentOutlined />
                  My Orders
                </Link>
              </li>
              <li className='hover:bg-green-200 hover:text-black  bg-green-300'>
                <Link
                  href='/gomla'
                  className='flex items-center gap-1 py-2 px-3'>
                  <AddOutlined />
                  Bulk Request
                </Link>
              </li>
              <li className='hover:bg-gray-200 text-white hover:text-black transition-colors duration-300 rounded-md'>
                <button
                  className='flex items-center gap-1 py-2 px-3'
                  onClick={() => setOpenLang(true)}>
                  <LanguageOutlined />
                  Language
                </button>
              </li>
              <li className='hover:bg-gray-200 text-white hover:text-black transition-colors duration-300 rounded-md'>
                <Link
                  href='/profile'
                  className='flex items-center gap-1 py-2 px-3'>
                  <PersonOutlined /> Hi, {user.user.name}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className='hover:bg-gray-200 hover:text-white transition-colors duration-300 rounded-md'>
                <button
                  className='flex items-center gap-1 py-2 px-3'
                  onClick={() => setOpenLang(true)}>
                  <LanguageOutlined />
                  Language
                </button>
              </li>

              <RegisterLoginBtn />
            </>
          )}
        </ul>
      </Drawer>
      <LanguagePopup
        open={openLang}
        setOpen={setOpenLang}
      />
    </>
  );
}
