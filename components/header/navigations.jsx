'use client';
import { useState } from 'react';
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
} from '@mui/material';
import {
  HomeOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
  AssignmentOutlined,
  AddOutlined,
  LanguageOutlined,
} from '@mui/icons-material';
import { colors } from '@/styles';
import { RegisterLoginBtn } from '@/components';
import logo from '@/assets/branding/logo.png';

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
export default function Navigations({ user }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        component='nav'
        sx={{
          backgroundColor: colors.primary,
          boxShadow: 'unset',
          position: 'unset',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
            alignItems: 'center',
          }}
        >
          <Link
            href='/'
            className='flex items-end gap-2 hover:text-white'
            style={{ flexGrow: '1' }}
          >
            <Image
              src={logo}
              alt='Logo'
              width={64}
              height={64}
            />
            <Typography
              variant='body2'
              component='p'
            >
              MedicaPlus
            </Typography>
          </Link>

          <IconButton
            edge='start'
            color='inherit'
            onClick={toggleDrawer}
            sx={{
              display: {
                xs: 'flex',
                lg: 'none',
              },
            }}
          >
            <AddOutlined />
          </IconButton>
          <List
            sx={{
              display: {
                xs: 'none',
                lg: 'flex',
              },
              alignItems: 'center',
              gap: '.5rem',
              flexGrow: '1',
              fontSize: '10px',
            }}
          >
            {user ? (
              <>
                <ListItem sx={styles.listitem}>
                  <Link
                    href='/'
                    className='hover:text-white'
                    style={styles.link}
                  >
                    <HomeOutlined /> Home
                  </Link>
                </ListItem>
                <ListItem sx={styles.listitem}>
                  <Link
                    style={styles.link}
                    href='/cart'
                    className='hover:text-white'
                  >
                    <ShoppingCartOutlined />
                    My Cart
                  </Link>
                </ListItem>
                <ListItem sx={styles.listitem}>
                  <Link
                    style={styles.link}
                    href='/orders'
                    className='hover:text-white '
                  >
                    <AssignmentOutlined />
                    My Orders
                  </Link>
                </ListItem>
                <ListItem sx={styles.listitem}>
                  <Link
                    style={styles.bulkbutton}
                    href='/gomla'
                    className='hover:text-white '
                  >
                    <AddOutlined />
                    Bulk Request
                  </Link>
                </ListItem>
                <ListItem sx={styles.listitem}>
                  <Button
                    sx={styles.link}
                    className='text-white capitalize'
                  >
                    <LanguageOutlined />
                    Language
                  </Button>
                </ListItem>
                <ListItem sx={styles.listitem}>
                  <Link
                    style={styles.link}
                    href='/profile'
                  >
                    <PersonOutlined /> Hi, {user.name}
                  </Link>
                </ListItem>
              </>
            ) : (
              <>
                <ListItem sx={styles.listitem}>
                  <Button
                    sx={styles.link}
                    className='text-white capitalize'
                  >
                    <LanguageOutlined />
                    Language
                  </Button>
                </ListItem>
                <RegisterLoginBtn />
              </>
            )}
          </List>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor='right'
        open={open}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'white', // Change background color

            width: '240px', // Custom width
            padding: '1rem', // Add padding
          },
        }}
      >
        <List>
          {user ? (
            <>
              <ListItem className='hover:bg-gray-100 hover:text-black'>
                <Link
                  href='/'
                  style={styles.link}
                >
                  <HomeOutlined /> Home
                </Link>
              </ListItem>
              <ListItem className='hover:bg-gray-100 hover:text-black'>
                <Link
                  href='/cart'
                  style={styles.link}
                >
                  <ShoppingCartOutlined />
                  My Cart
                </Link>
              </ListItem>
              <ListItem className='hover:bg-gray-100 hover:text-black'>
                <Link
                  href='/orders'
                  style={styles.link}
                >
                  <AssignmentOutlined />
                  My Orders
                </Link>
              </ListItem>
              <ListItem className='hover:bg-green-200 hover:text-black bg-green-300'>
                <Link
                  href='/gomla'
                  style={styles.link}
                >
                  <AddOutlined />
                  Bulk Request
                </Link>
              </ListItem>
              <ListItem className='hover:bg-gray-100 hover:text-black '>
                <Button sx={styles.language}>
                  <LanguageOutlined />
                  Language
                </Button>
              </ListItem>
              <ListItem className='hover:bg-gray-100 hover:text-black'>
                <Link
                  href='/profile'
                  style={styles.link}
                >
                  <PersonOutlined /> Hi, {user.name}
                </Link>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem className='hover:bg-gray-100 hover:text-black '>
                <Button sx={styles.language}>
                  <LanguageOutlined />
                  Language
                </Button>
              </ListItem>
              <RegisterLoginBtn />
            </>
          )}
        </List>
      </Drawer>
    </>
  );
}
