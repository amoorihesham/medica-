'use client';
import { colors } from '@/styles';
import { Box, Button } from '@mui/material';
import Link from 'next/link';

export default function GomlaMainBtn() {
  return (
    <Box
      sx={{
        marginTop: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link
        href='/products'
        style={{
          backgroundColor: colors.red,
          padding: '1rem 2rem',
          color: colors.primaryText,
          width: '49%',
          height: '150px',
          fontSize: '48px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Drug store
      </Link>
      <Link
        href='/gomla'
        style={{
          backgroundColor: colors.yellow,
          padding: '1rem 2rem',
          color: colors.primaryText,
          width: '49%',
          height: '150px',
          fontSize: '48px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Gomla now
      </Link>
    </Box>
  );
}
