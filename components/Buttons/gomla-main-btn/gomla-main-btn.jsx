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
        columnGap: '1rem',
      }}>
      <Button
        type='link'
        href='/products'
        sx={{
          backgroundColor: colors.red,
          padding: '1rem 2rem',
          color: colors.primaryText,
          borderRadius: '24px',
          width: '100%',
          height: '224px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundImage: `url(${drug?.image})`,
          // backgroundSize: 'contain',
          // backgroundPosition: 'center',
          // backgroundRepeat: 'no-repeat',
          fontSize: '36px',
        }}>
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
          width: '100%',
          height: '224px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundImage: `url(${gomla?.image})`,
          // backgroundSize: 'contain',
          // backgroundPosition: 'center',
          // backgroundRepeat: 'no-repeat',
          fontSize: '36px',
        }}>
        Gomla now
      </Button>
    </Box>
  );
}
