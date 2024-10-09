import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const authRegister = createAsyncThunk('auth/register', async (userInfo, thunkApi) => {
  try {
    // const { data } = await axios.post('https://ai.w-manage.org/api/register', userInfo);
    // return data?.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
