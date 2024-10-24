'use client';
import { useState } from 'react';
import { SupervisedUserCircleOutlined } from '@mui/icons-material';
import { AuthModal } from '@/components/Auth';

const RegisterLoginBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li>
        <button
          className='flex items-center gap-1 border py-1 px-3 rounded-md text-white'
          onClick={() => setOpen(true)}>
          <SupervisedUserCircleOutlined />
          Login / Sign up
        </button>
      </li>

      <AuthModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default RegisterLoginBtn;
