'use client';
import { useState } from 'react';
import { Button, Typography, Box, ListItem, Modal } from '@mui/material';
import { SupervisedUserCircleOutlined } from '@mui/icons-material';

import { LoginForm, SignupForm } from '@/components';
import StateProvider from '@/components/Provider';
import { AuthModal } from '@/components/Auth';

const RegisterLoginBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItem sx={{ padding: '0 2rem 0 0', width: 'fit-content', justifyContent: 'end' }}>
        <Button
          startIcon={<SupervisedUserCircleOutlined />}
          sx={{ padding: '5px 12px', color: 'white', borderColor: 'white' }}
          variant='outlined'
          onClick={() => setOpen(true)}>
          Login / Sign up
        </Button>
      </ListItem>
      {/* <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 550,
            bgcolor: 'background.paper',
            boxShadow: 24,
            pt: 0,
            px: 2,
            pb: 2,
            borderRadius: '.5rem',
            maxHeight: '90vh',
            overflowY: 'auto',
            whiteSpace: 'nowrap',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}>
          <Typography
            variant='h4'
            component='h1'
            sx={{ textAlign: 'center', marginTop: '1rem' }}>
            Lets Get Started
          </Typography>
          <Box
            sx={{
              marginY: '1rem',
              display: 'flex',
              justifyContent: 'center',
              width: '90%',
              marginInline: 'auto',
            }}>
            <Button
              variant='outlined'
              sx={styles.login}
              onClick={() => setLogin(true)}>
              Log In
            </Button>
            <Button
              variant='outlined'
              sx={styles.register}
              onClick={() => setLogin(false)}>
              Sign Up
            </Button>
          </Box>
          <StateProvider>
            {login ? <LoginForm closePopup={setOpen} /> : <SignupForm />}
          </StateProvider>
        </Box>
      </Modal> */}
      <AuthModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default RegisterLoginBtn;
