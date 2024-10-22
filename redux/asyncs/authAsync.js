import { api } from '@/utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const Register = createAsyncThunk('auth/register', async (formData, { rejectWithValue }) => {
  try {
    const { data } = await api.post('/register', formData);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const Login = createAsyncThunk('auth/login', async (formData, { rejectWithValue }) => {
  try {
    const { data } = await api.post('/login', formData);
    const savedUser = {
      token: data?.data.token,
      ...data?.data?.user,
    };
    localStorage.setItem('userData', JSON.stringify(savedUser));
    return savedUser;
  } catch (error) {
    return rejectWithValue(error);
  }
});
