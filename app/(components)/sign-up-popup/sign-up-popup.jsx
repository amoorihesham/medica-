import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SignupForm = () => {
  return (
    <Box
      sx={{ width: '100%', textAlign: 'left' }}
      component='form'
      noValidate
      autoComplete='off'
    >
      <Stack
        component='div'
        marginTop={5}
        spacing={3}
      >
        <TextField
          sx={{ backgroundColor: '#FFF7F7', width: '60%' }}
          variant='outlined'
          id='username'
          placeholder='Full Name'
          size='small'
          required
        />
        <TextField
          sx={{ backgroundColor: '#FFF7F7', width: '60%' }}
          variant='outlined'
          id='phone'
          placeholder='Phone number'
          size='small'
          required
        />
        <TextField
          sx={{ backgroundColor: '#FFF7F7', width: '60%' }}
          variant='outlined'
          id='password'
          placeholder='Password'
          size='small'
          required
        />
        <TextField
          sx={{ backgroundColor: '#FFF7F7', width: '60%' }}
          variant='outlined'
          id='pharmacyName'
          placeholder='Pharmacy name'
          size='small'
          required
        />
        <TextField
          sx={{ backgroundColor: '#FFF7F7', width: '60%' }}
          variant='outlined'
          id='pharmacyPhone'
          placeholder='Pharmacy phone'
          size='small'
          required
        />
        <Button variant='contained'>Sign Up</Button>
      </Stack>
    </Box>
  );
};

export default SignupForm;
