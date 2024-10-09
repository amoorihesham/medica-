'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '@/redux/slices/authSlice';
import CustomInput from '@/components/Inputs/try/TryInput';
import { SubmitButton } from '@/components/Buttons';

const LoginForm = ({ closePopup }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post('https://ai.w-manage.org/api/login', formData);
      localStorage.setItem('user', JSON.stringify(data.data));
      dispatch(setUser(data.data));
      closePopup();
    } catch (error) {
      setError(error.response.data.data[0]);
    }
  };
  return (
    <form
      className='w-96 mx-auto'
      onSubmit={handleSubmit(onSubmit)}>
      {error && <p className='text-md font-light text-red-500'>{error}</p>}
      <div className='w-96'>
        <CustomInput
          name='mobile'
          register={register}
          errors={errors}
          placeholder='Mobile'
          type='text'
        />
        <CustomInput
          name='password'
          register={register}
          errors={errors}
          placeholder='Password'
          type='password'
        />
        <Link
          href='/'
          className='underline flex justify-end p-0 text-sm w-fit !ml-auto text-blue-400 m-0'>
          Forget password
        </Link>
      </div>
      <div className='flex justify-center'>
        <SubmitButton text='log in' />
      </div>
    </form>
  );
};

export default LoginForm;
