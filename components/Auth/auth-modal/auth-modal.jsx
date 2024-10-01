'use client';
import { Box, Button, ButtonGroup, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import { SignupForm, LoginForm } from '@/components';

const AuthModal = () => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    modal: {
      position: 'absolute',
      minHeight: '100vh',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 777,
      bgcolor: 'white',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: 24,
      p: 4,
    },
    button: {
      border: '1px solid #164B60',
      backgroundColor: login ? '#164B60' : 'transparent',
      width: '50%',
      color: login ? 'white' : 'black',
    },
    buttonRegister: {
      border: '1px solid #164B60',
      backgroundColor: !login ? '#164B60' : 'transparent',
      width: '50%',
      color: !login ? 'white' : 'black',
    },
  };
  return (
    <Box>
      <Button
        variant='contained'
        onClick={handleOpen}
      >
        Register
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='Auhtentication Form'
        aria-describedby='Auth Modal'
      >
        <Box sx={style.modal}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{ fontSize: '36px', fontWeight: 'semibold', marginBottom: '1rem' }}
          >
            Let’s Get Started
          </Typography>
          <ButtonGroup
            variant='outlined'
            aria-label='Auhtentication Process'
            sx={{ border: 'none', width: '100%' }}
          >
            <Button
              sx={style.button}
              onClick={() => setLogin(true)}
            >
              Login
            </Button>
            <Button
              sx={style.buttonRegister}
              onClick={() => setLogin(false)}
            >
              Register
            </Button>
          </ButtonGroup>
          {login ? <LoginForm /> : <SignupForm />}
        </Box>
      </Modal>
    </Box>
  );
};

export default AuthModal;
