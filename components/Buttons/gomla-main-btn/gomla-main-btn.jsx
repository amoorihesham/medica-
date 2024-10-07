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
        flexDirection: {
          xs: 'column',
          lg: 'row',
        },
        rowGap: '1rem',
      }}
    >
      <Button
        type='link'
        href='/products'
        sx={{
          backgroundColor: colors.red,
          padding: '1rem 2rem',
          color: colors.primaryText,
          width: {
            xs: '100%',
            lg: '49%',
          },
          height: {
            xs: '75px',
            lg: '150px',
          },
          fontSize: {
            xs: '18px',
            lg: '48px',
          },
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '24px',
        }}
      >
        Drug store
      </Button>
      <Button
        type='link'
        href='/gomla'
        sx={{
          backgroundColor: colors.yellow,
          padding: '1rem 2rem',
          color: colors.primaryText,
          borderRadius: '24px',
          width: {
            xs: '100%',
            lg: '49%',
          },
          height: {
            xs: '75px',
            lg: '150px',
          },
          fontSize: {
            xs: '18px',
            lg: '48px',
          },
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Gomla now
      </Button>
    </Box>
  );
}
