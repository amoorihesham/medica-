'use client';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Login } from '@/redux/asyncs/authAsync';
import { SubmitButton } from '@/components/Buttons';
import CustomInput from '@/components/Inputs/try/TryInput';

const LoginForm = ({ closePopup }) => {
  const { isLoading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });
  const onSubmit = async (formData) => {
    try {
      await dispatch(Login(formData)).unwrap();
      closePopup();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form
      className='w-96 mx-auto'
      onSubmit={handleSubmit(onSubmit)}>
      {error && <p className='text-md font-light text-red-500'>{error?.message}</p>}
      <div className='w-96'>
        <CustomInput
          name='mobile'
          register={register}
          errors={errors}
          placeholder='Mobile'
          type='text'
          rules={{
            required: 'Phone number is required',
            minLength: {
              value: 11,
              message: 'Phone number must be 11 Digit',
            },
            maxLength: {
              value: 11,
              message: 'Phone number must be 11 Digit',
            },
            pattern: {
              value: /^[0-9]{11}$/,
              message: 'Invalid phone number format',
            },
          }}
        />
        <CustomInput
          name='password'
          register={register}
          errors={errors}
          placeholder='Password'
          type='password'
          rules={{
            required: 'Password is required',
          }}
        />
        <Link
          href='/'
          className='underline flex justify-end p-0 text-sm w-fit !ml-auto text-blue-400 m-0'>
          Forget password
        </Link>
      </div>
      <div className='flex justify-center'>
        <SubmitButton
          text='log in'
          isLoading={isLoading}
        />
      </div>
    </form>
  );
};

export default LoginForm;
