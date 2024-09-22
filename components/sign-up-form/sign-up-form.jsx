'use client';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';

const SignupForm = () => {
  const [gov, setGov] = useState('');
  const [area, setArea] = useState('');
  const [pharmacy, setPharmacy] = useState('');
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
        <FormControl
          sx={{ backgroundColor: '#FFF7F7', width: '60%' }}
          variant='outlined'
          size='small'
          required
        >
          <TextField
            id='fullName'
            label='Full name'
            placeholder='Full name'
            size='small'
            value={pharmacy}
            onChange={(e) => setPharmacy(e.target.value)}
          />
        </FormControl>
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
            value={pharmacy}
            onChange={(e) => setPharmacy(e.target.value)}
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
            value={pharmacy}
            onChange={(e) => setPharmacy(e.target.value)}
          />
        </FormControl>
        <FormControl
          sx={{ width: '60%', backgroundColor: '#FFF7F7' }}
          variant='outlined'
          size='small'
          required
        >
          <InputLabel id='government'>Government</InputLabel>
          <Select
            labelId='government'
            id='government'
            label='government'
            value={gov}
            onChange={(event) => setGov(event.target.value)}
            size='small'
            required
          >
            <MenuItem value='cairo'>Cairo</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{ width: '60%', backgroundColor: '#FFF7F7' }}
          variant='outlined'
          size='small'
          required
        >
          <InputLabel id='area'>Area</InputLabel>
          <Select
            labelId='area'
            id='area'
            label='area'
            value={area}
            onChange={(event) => setArea(event.target.value)}
          >
            <MenuItem value='cairo'>Cairo</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{ backgroundColor: '#FFF7F7', width: '60%' }}
          variant='outlined'
          size='small'
          required
        >
          <TextField
            id='pharmacyName'
            label='Pharmacy name'
            placeholder='Pharmacy name'
            size='small'
            value={pharmacy}
            onChange={(e) => setPharmacy(e.target.value)}
          />
        </FormControl>
        <FormControl
          sx={{ backgroundColor: '#FFF7F7', width: '60%' }}
          variant='outlined'
          size='small'
          required
        >
          <TextField
            id='pharmacyPhone'
            label='Pharmacy phone'
            placeholder='Pharmacy phone'
            size='small'
            value={pharmacy}
            onChange={(e) => setPharmacy(e.target.value)}
          />
        </FormControl>
        <Button
          variant='contained'
          sx={{ bgcolor: '#164B60', width: '50%', margin: 'auto' }}
        >
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
};

export default SignupForm;
