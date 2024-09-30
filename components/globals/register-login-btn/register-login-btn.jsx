'use client';
import { useState } from 'react';
import { Button, Typography, Box, ListItem, Modal } from '@mui/material';
import { SupervisedUserCircleOutlined } from '@mui/icons-material';
// import { Modal } from 'antd';
import { LoginForm, SignupForm } from '@/components';

const RegisterLoginBtn = () => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const styles = {
    register: {
      bgcolor: !login ? '#164B60' : 'transparent',
      borderColor: '#164B60',
      width: 150,
      color: !login ? 'white' : 'black',
    },
    login: {
      bgcolor: login ? '#164B60' : 'transparent',
      borderColor: '#164B60',
      width: 150,
      color: login ? 'white' : 'black',
    },
  };
  return (
    <>
      <ListItem sx={{ padding: '0 2rem 0 0', width: 'fit-content', justifyContent: 'end' }}>
        <Button
          startIcon={<SupervisedUserCircleOutlined />}
          sx={{ padding: '5px 12px', color: 'white', borderColor: 'white' }}
          variant='outlined'
          onClick={() => setOpen(true)}
        >
          Login / Sign up
        </Button>
      </ListItem>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 550,
            bgcolor: 'background.paper',
            boxShadow: 24,
            pt: 1,
            px: 2,
            pb: 2,
            borderRadius: '.5rem',
          }}
        >
          <Typography
            variant='h4'
            component='h1'
            sx={{ textAlign: 'center', marginTop: '1rem' }}
          >
            Lets Get Started
          </Typography>
          <Box sx={{ marginY: '1rem', display: 'flex', justifyContent: 'center' }}>
            <Button
              variant='outlined'
              sx={styles.login}
              onClick={() => setLogin(true)}
            >
              Login
            </Button>
            <Button
              variant='outlined'
              sx={styles.register}
              onClick={() => setLogin(false)}
            >
              Register
            </Button>
          </Box>
          {login ? <LoginForm /> : <SignupForm />}
        </Box>
      </Modal>
      {/* <Modal
        open={open}
        onCancel={() => setOpen(false)}
      >
        <Typography
          variant='h4'
          component='h1'
          sx={{ textAlign: 'center', marginTop: '1rem' }}
        >
          Lets Get Started
        </Typography>
        <Box sx={{ marginY: '1rem', display: 'flex', justifyContent: 'center' }}>
          <Button
            variant='outlined'
            sx={styles.login}
            onClick={() => setLogin(true)}
          >
            Login
          </Button>
          <Button
            variant='outlined'
            sx={styles.register}
            onClick={() => setLogin(false)}
          >
            Register
          </Button>
        </Box>
        {login ? <LoginForm /> : <SignupForm />}
      </Modal> */}
    </>
  );
};

export default RegisterLoginBtn;
