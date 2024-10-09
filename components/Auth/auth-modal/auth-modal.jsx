import StateProvider from '@/components/Provider';
import { Box, Button, Modal, Typography } from '@mui/material';
import { LoginForm, SignupForm } from '..';
import { useState } from 'react';

export default function AuthModal({ open, setOpen }) {
  const [login, setLogin] = useState(false);
  const styles = {
    register: {
      bgcolor: !login ? '#164B60' : 'transparent',
      borderColor: '#164B60',
      width: '50%',
      color: !login ? 'white' : 'black',
      textTransform: 'capitalize',
      fontWeight: '400',
      borderRadius: '0',
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
    },
    login: {
      bgcolor: login ? '#164B60' : 'transparent',
      borderColor: '#164B60',
      width: '50%',
      color: login ? 'white' : 'black',
      textTransform: 'capitalize',
      fontWeight: '400',
      borderRadius: '0',
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',
    },
  };
  return (
    <Modal
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
        <StateProvider>{login ? <LoginForm closePopup={setOpen} /> : <SignupForm />}</StateProvider>
      </Box>
    </Modal>
  );
}
