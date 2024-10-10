'use client';
import { SubmitButton } from '@/components/Buttons';
import { CheckInput, SelectInput } from '@/components/Inputs';
import CustomInput from '@/components/Inputs/try/TryInput';
import { setUser } from '@/redux/slices/authSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const SignupForm = ({ setLogin }) => {
  const [error, setError] = useState(null);
  const [govs, setGovs] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      mobile: '',
      password: '',
      confirm_password: '',
      governorate: '',
      pharmacy_name: '',
      pharmacy_phone: '',
    },
  });

  useEffect(() => {
    const func = async () => {
      const { data } = await axios.get('https://ai.w-manage.org/api/governorate');
      setGovs(data.data);
    };

    func();
  }, []);
  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post('https://ai.w-manage.org/api/register', formData);
      toast.success('Registration successfully');
      setError('');
      reset();
      setLogin(true);
    } catch (error) {
      setError(error.response.data.data[0]);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && <p className='text-md font-light text-red-500 text-center'>{error}</p>}
      <div className='w-80 mx-auto'>
        <CustomInput
          name='name'
          register={register}
          errors={errors}
          placeholder='Full name'
          type='text'
          rules={{
            required: 'Full name is required',
          }}
        />
        <CustomInput
          name='mobile'
          register={register}
          errors={errors}
          placeholder='Phone number'
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
        <CustomInput
          name='password_confirmation'
          register={register}
          errors={errors}
          placeholder='Confirm password'
          type='password'
          rules={{
            required: 'Password Confirmation is required',
          }}
        />
        <SelectInput
          name='governorate'
          register={register}
          errors={errors}
          watch={watch}
          setValue={setValue}
          list={govs}
        />

        <CustomInput
          name='pharmacy_name'
          register={register}
          errors={errors}
          placeholder='Pharmacy name'
          type='text'
          rules={{
            required: 'Pharmacy name is required',
          }}
        />
        <CustomInput
          name='pharmacy_phone'
          register={register}
          errors={errors}
          placeholder='Pharmacy phone'
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
        <CheckInput
          name='privacy'
          register={register}
          errors={errors}
          text='I agree with Privacy Policy and Terms and Conditions'
        />
        <SubmitButton text='sign up' />
      </div>
    </form>
  );
};

export default SignupForm;
