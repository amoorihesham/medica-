'use client';
import { authRegister } from '@/redux/asyncs/authAsync';
import { setUser } from '@/redux/slices/authSlice';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const SignupForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post('https://ai.w-manage.org/api/register', {
        ...formData,
        governorate: 'alex',
        area: 'alex',
      });

      dispatch(setUser(data.data));
    } catch (error) {
      setError(error.response.data.data[0]);
    }
  };
  return (
    <Box
      sx={{ width: '100%', textAlign: 'left' }}
      component='form'
      onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <Typography
          variant='h6'
          color='#fff'
          textAlign='center'
          bgcolor='error.light'>
          {error}
        </Typography>
      )}
      <Stack
        component='div'
        marginTop={3}
        spacing={2}>
        <FormControl sx={{ backgroundColor: '#FFF7F7', width: '60%' }}>
          <TextField
            label='Full name'
            placeholder='Full name'
            size='small'
            error={errors?.name}
            helperText={errors?.name && errors?.name.message}
            {...register('name', {
              required: {
                value: true,
                message: 'Full name is required',
              },
            })}
          />
        </FormControl>
        <FormControl sx={{ backgroundColor: '#FFF7F7', width: '60%' }}>
          <TextField
            label='Mobile'
            placeholder='Mobile'
            size='small'
            error={errors?.mobile}
            helperText={errors?.mobile && errors?.mobile.message}
            {...register('mobile', {
              required: {
                value: true,
                message: 'Mobile is required',
              },
            })}
          />
        </FormControl>
        <FormControl sx={{ backgroundColor: '#FFF7F7', width: '60%' }}>
          <TextField
            label='Password'
            placeholder='Password'
            size='small'
            error={errors?.password}
            helperText={errors?.password && errors?.password.message}
            {...register('password', {
              required: {
                value: true,
                message: 'Password is required',
              },
            })}
          />
        </FormControl>
        <FormControl sx={{ backgroundColor: '#FFF7F7', width: '60%' }}>
          <TextField
            label='Confirm Password'
            placeholder='Confirm Password'
            size='small'
            error={errors?.password_confirmation}
            helperText={errors?.password_confirmation && errors?.password_confirmation.message}
            {...register('password_confirmation', {
              required: {
                value: true,
                message: 'Confirm Password is required',
              },
            })}
          />
        </FormControl>
        {/* <FormControl sx={{ width: '60%', backgroundColor: '#FFF7F7' }}>
          <Select
            labelId='government'
            label='government'
            size='small'>
            <MenuItem value='cairo'>Cairo</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '60%', backgroundColor: '#FFF7F7' }}>
          <Select
            labelId='area'
            label='area'
            size='small'>
            <MenuItem value='cairo'>Cairo</MenuItem>
          </Select>
        </FormControl> */}
        <FormControl sx={{ backgroundColor: '#FFF7F7', width: '60%' }}>
          <TextField
            label='Pharmacy name'
            placeholder='Pharmacy name'
            size='small'
            error={errors?.pharmacy_name}
            helperText={errors?.pharmacy_name && errors?.pharmacy_name.message}
            {...register('pharmacy_name', {
              required: {
                value: true,
                message: 'Pharmacy name is required',
              },
            })}
          />
        </FormControl>
        <FormControl sx={{ backgroundColor: '#FFF7F7', width: '60%' }}>
          <TextField
            label='Pharmacy phone'
            placeholder='Pharmacy phone'
            size='small'
            error={errors?.pharmacy_phone}
            helperText={errors?.pharmacy_phone && errors?.pharmacy_phone.message}
            {...register('pharmacy_phone', {
              required: {
                value: true,
                message: 'Pharmacy number is required',
              },
            })}
          />
        </FormControl>
      </Stack>
      <Button
        variant='contained'
        type='submit'
        sx={{ bgcolor: '#164B60', width: '70%', margin: ' 2rem auto ', display: 'block' }}>
        Sign Up
      </Button>
    </Box>
  );
};

export default SignupForm;
