import { Box, Container, Typography } from '@mui/material';
import { CartItem } from '@/components';
export default function Cart() {
  return (
    <Box>
      <Container
        maxWidth='xl'
        sx={{ marginTop: '3rem' }}
      >
        <Typography
          variant='h4'
          component='h1'
        >
          Cart (2 Items)
        </Typography>
        <CartItem product={{ title: 'test', sold: 45216, dTime: 'wed / 2024', price: 4589 }} />
      </Container>
    </Box>
  );
}
