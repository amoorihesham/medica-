import { Box, Button, FormControl, Stack, TextField } from '@mui/material';

const LoginForm = () => {
  return (
    <Box sx={{ width: '100%', textAlign: 'left' }}>
      <Stack
        component='div'
        marginTop={5}
        spacing={3}
      >
        <FormControl
          sx={{ backgroundColor: '#FFF7F7', width: '60%' }}
          variant='outlined'
          size='small'
          required
        >
          <TextField
            id='phone'
            label='Phone'
            placeholder='Phone'
            size='small'
          />
        </FormControl>
        <FormControl
          sx={{ backgroundColor: '#FFF7F7', width: '60%' }}
          variant='outlined'
          size='small'
          required
        >
          <TextField
            id='password'
            label='Password'
            placeholder='Password'
            size='small'
          />
        </FormControl>
        <Button
          variant='contained'
          sx={{ bgcolor: '#164B60', width: '50%', margin: 'auto' }}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginForm;
