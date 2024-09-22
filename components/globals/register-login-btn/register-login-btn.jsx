'use client';
import { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { SupervisedUserCircleOutlined } from '@mui/icons-material';
import { Modal } from 'antd';
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
      <Button
        variant='outlined'
        startIcon={<SupervisedUserCircleOutlined />}
        sx={{ color: 'white', borderColor: 'white' }}
        onClick={() => setOpen(true)}
      >
        Sign up / Log in
      </Button>
      <Modal
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
      </Modal>
    </>
  );
};

export default RegisterLoginBtn;
