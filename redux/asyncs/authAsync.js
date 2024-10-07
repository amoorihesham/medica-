import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const authRegister = createAsyncThunk('auth/register', async (userInfo, thunkApi) => {
  try {
    console.log(userInfo);
    // const { data } = await axios.post('https://ai.w-manage.org/api/register', userInfo);
    // console.log(data);
    // return data?.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
