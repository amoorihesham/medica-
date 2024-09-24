'use client';
import Link from 'next/link';
import { Box, Button } from '@mui/material';

const SeeMoreBtn = ({ url }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
      <Button
        variant='contained'
        sx={{ bgcolor: '#164B60' }}
      >
        <Link href={url}>See More</Link>
      </Button>
    </Box>
  );
};

export default SeeMoreBtn;
