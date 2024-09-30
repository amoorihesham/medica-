import { Box, Button, Container, Typography } from '@mui/material';

export default function ShippingDetails() {
  return (
    <Box sx={{ marginBottom: '2rem' }}>
      <Typography
        variant='h6'
        component='h6'
      >
        Shipping Details
      </Typography>
      <Container
        maxWidth='lg'
        sx={{
          marginTop: '.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            variant='body'
            component='p'
          >
            Ola Ibrahim
          </Typography>
          <Typography
            variant='body'
            component='p'
          >
            anywhere | Building 14 | any landmark
          </Typography>
          <Typography
            variant='body'
            component='p'
          >
            Cairo, Egypt
          </Typography>
        </Box>
        <Button type='link'>Change</Button>
      </Container>
    </Box>
  );
}
