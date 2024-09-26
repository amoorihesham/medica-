import { Typography, Box } from '@mui/material';

export default function CartSummary() {
  return (
    <Box sx={{ border: '1px solid black', padding: '1rem' }}>
      <Typography
        variant='h5'
        component='h5'
      >
        Order Summary
      </Typography>
    </Box>
  );
}
