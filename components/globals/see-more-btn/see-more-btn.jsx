'use client'
import { redirect } from 'next/navigation';
import { Box, Button } from '@mui/material';

const SeeMoreBtn = ({ url }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
      <Button
        variant='contained'
        sx={{ bgcolor: '#164B60' }}
        onClick={() => redirect(url)}
      >
        See More
      </Button>
    </Box>
  );
};

export default SeeMoreBtn;
