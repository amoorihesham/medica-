'use client';
import { Box, Button } from '@mui/material';

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
        variant='drugStore'
        type='link'
        href='/products'>
        Drug store
      </Button>
      <Button
        variant='gomlaStore'
        type='link'
        href='/gomla'>
        Gomla now
      </Button>
    </Box>
  );
}
