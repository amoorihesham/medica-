'use client';
import { colors } from '@/styles';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

export default function SearchGomla() {
  const [term, setTerm] = useState('');
  const naviagte = useRouter();

  const handleClick = () => {
    naviagte.push(`/search?term=${term}`);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '.5rem',
        marginBlock: '1rem',
      }}>
      <input
        type='text'
        placeholder='Search gomla products'
        className='bg-mpink py-2 px-3 rounded-md outline-none placeholder:text-sm placeholder:text-gray-400 w-1/2'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <Button
        variant='contained'
        sx={{ bgcolor: colors.primary }}
        onClick={handleClick}>
        Serach
      </Button>
    </Box>
  );
}
