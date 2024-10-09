'use client';
import CustomInput from '@/components/Inputs/try/TryInput';
import { EditCalendar } from '@mui/icons-material';
import { Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function DetailsPage() {
  const [editable, setEditable] = useState(true);
  const { register } = useForm();
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '1.5rem' }}>
      <div className='flex items-center justify-between'>
        <Typography variant='h4'>Profile Details</Typography>
        <button
          className=' hover:bg-gray-50 cursor-pointer py-2 px-3'
          onClick={() => setEditable(!editable)}>
          <EditCalendar />
        </button>
      </div>
      <form>
        <div className='border p-4 max-w-3xl mt-5 rounded-md'>
          <div className='flex items-center gap-5 mb-5'>
            <div className='w-1/2'>
              <label
                htmlFor='name'
                className='block text-md mb-2 text-gray-600 text-sm font-medium'>
                Name
              </label>
              <input
                type='text'
                className='w-full py-2 px-3 border border-gray-200 text-gray-400 rounded-lg disabled:bg-transparent '
                value='Amr Hesham'
                disabled={editable}
                id='name'
              />
            </div>
            <div className='w-1/2'>
              <label
                htmlFor='phone'
                className='block text-md mb-2 text-gray-600 text-sm font-medium'>
                Phone
              </label>
              <input
                type='text'
                className='w-full py-2 px-3 border border-gray-200 text-gray-400 rounded-lg disabled:bg-transparent '
                value='01015147813'
                disabled={editable}
                id='phone'
              />
            </div>
          </div>
          <div className='flex items-center gap-5 mb-5'>
            <div className='w-1/2'>
              <label
                htmlFor='password'
                className='block text-md mb-2 text-gray-600 text-sm font-medium'>
                Password
              </label>
              <input
                type='password'
                className='w-full py-2 px-3 border border-gray-200 text-gray-400 rounded-lg disabled:bg-transparent '
                value='464646'
                disabled={editable}
                id='password'
              />
            </div>
            <div className='w-1/2'>
              <Link
                href={'/'}
                className='font-semibold text-sm text-teal-900'>
                Change password
              </Link>
            </div>
          </div>
          <div className='flex items-center gap-5 mb-5'>
            <div className='w-1/2'>
              <label
                htmlFor='government'
                className='block text-md mb-2 text-gray-600 text-sm font-medium'>
                Government
              </label>
              <input
                type='text'
                className='w-full py-2 px-3 border border-gray-200 text-gray-400 rounded-lg disabled:bg-transparent '
                value='Cairo'
                disabled={editable}
                id='government'
              />
            </div>
            <div className='w-1/2'>
              <label
                htmlFor='area'
                className='block text-md mb-2 text-gray-600 text-sm font-medium'>
                Area
              </label>
              <input
                type='text'
                className=' w-full py-2 px-3 border border-gray-200 text-gray-400 rounded-lg disabled:bg-transparent '
                value='Helioplis'
                disabled={editable}
                id='area'
              />
            </div>
          </div>
          <div className='flex items-center gap-5 '>
            <div className='w-1/2'>
              <label
                htmlFor='pharmacy_name'
                className='block text-md mb-2 text-gray-600 text-sm font-medium'>
                Pharmacy name
              </label>
              <input
                type='text'
                className='w-full py-2 px-3 border border-gray-200 text-gray-400 rounded-lg disabled:bg-transparent '
                value='Test'
                disabled={editable}
                id='pharmacy_name'
              />
            </div>
            <div className='w-1/2'>
              <label
                htmlFor='pharmacy_number'
                className='block text-md mb-2 text-gray-600 text-sm font-medium'>
                Pharmacy number
              </label>
              <input
                type='text'
                className=' w-full py-2 px-3 border border-gray-200 text-gray-400 rounded-lg disabled:bg-transparent '
                value='Helioplis'
                disabled={editable}
                id='pharmacy_number'
              />
            </div>
          </div>
        </div>
        <Typography
          variant='h4'
          className='mt-10'>
          Shipping Details
        </Typography>
        <div className=' p-4 max-w-3xl mt-5 rounded-md'>
          <div className='flex items-center gap-5 mb-5'>
            <div className='w-1/2'>
              <label
                htmlFor='country'
                className='block text-md mb-2 text-gray-600 text-sm font-medium'>
                Country / Region
              </label>
              <input
                type='text'
                className='w-full py-2 px-3 border border-gray-200 text-gray-400 rounded-lg disabled:bg-transparent '
                value='Cairo'
                disabled={editable}
                id='country'
              />
            </div>
          </div>
          <div className='flex items-center gap-5 mb-5'>
            <div className='w-3/4'>
              <label
                htmlFor='address'
                className='block text-md mb-2 text-gray-600 text-sm font-medium'>
                Address
              </label>
              <input
                type='text'
                className='w-full py-2 px-3 border border-gray-200 text-gray-400 rounded-lg disabled:bg-transparent '
                value='St, Test'
                disabled={editable}
                id='address'
              />
            </div>
          </div>
          <div className='flex items-center gap-5 mb-5'>
            <div>
              <label
                htmlFor='building_no'
                className='block text-md mb-2 text-gray-600 text-sm font-medium'>
                Building no.
              </label>
              <input
                type='text'
                className='w-full py-2 px-3 border border-gray-200 text-gray-400 rounded-lg disabled:bg-transparent '
                value='32'
                disabled={editable}
                id='building_no'
              />
            </div>
            <div>
              <label
                htmlFor='nearest_landmark'
                className='block text-md mb-2 text-gray-600 text-sm font-medium'>
                Nearest landmark
              </label>
              <input
                type='text'
                className=' w-full py-2 px-3 border border-gray-200 text-gray-400 rounded-lg disabled:bg-transparent '
                value='Pharmacy'
                disabled={editable}
                id='nearest_landmark'
              />
            </div>
          </div>
          <div className='flex items-center gap-5 '>
            <div>
              <label
                htmlFor='city'
                className='block text-md mb-2 text-gray-600 text-sm font-medium'>
                City
              </label>
              <input
                type='text'
                className='w-full py-2 px-3 border border-gray-200 text-gray-400 rounded-lg disabled:bg-transparent '
                value='Cairo'
                disabled={editable}
                id='city'
              />
            </div>
            <div>
              <label
                htmlFor='government'
                className='block text-md mb-2 text-gray-600 text-sm font-medium'>
                Government
              </label>
              <input
                type='text'
                className=' w-full py-2 px-3 border border-gray-200 text-gray-400 rounded-lg disabled:bg-transparent '
                value='Cairo'
                disabled={editable}
                id='government'
              />
            </div>
            <div>
              <label
                htmlFor='postal_code'
                className='block text-md mb-2 text-gray-600 text-sm font-medium'>
                Postal code
              </label>
              <input
                type='text'
                className=' w-full py-2 px-3 border border-gray-200 text-gray-400 rounded-lg disabled:bg-transparent '
                value='8645'
                disabled={editable}
                id='postal_code'
              />
            </div>
          </div>
        </div>
      </form>
      <Stack
        marginTop='1.5rem'
        spacing={3}></Stack>
    </Container>
  );
}
