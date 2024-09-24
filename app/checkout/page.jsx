import { Box, Container, Typography } from '@mui/material';
export default function Checkout() {
  return (
    <Box>
      <Container
        maxWidth='xl'
        sx={{ marginTop: '3rem' }}
      >
        <Typography
          variant='h1'
          component='h3'
        >
          Checkout Page
        </Typography>
      </Container>
    </Box>
  );
}
