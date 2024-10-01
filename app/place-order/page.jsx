import { CartItem, CartSummary, ShippingDetails } from '@/components';
import { colors } from '@/styles';
import { Box, Button, Container, Typography } from '@mui/material';
export default function PlaceOrder() {
  return (
    <Box>
      <Container
        maxWidth='xl'
        sx={{ marginTop: '1rem' }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              md: 'row',
              lg: 'row',
            },
          }}
        >
          <Box>
            <ShippingDetails />
            <Box>
              <Typography
                component='h6'
                variant='h6'
              >
                Review Order
              </Typography>
              <CartItem
                product={{ title: 'test', sold: 45216, dTime: 'wed / 2024', price: 4589 }}
              />
              <CartItem
                product={{ title: 'test', sold: 45216, dTime: 'wed / 2024', price: 4589 }}
              />
            </Box>
          </Box>
          <CartSummary />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Button
            sx={{ bgcolor: colors.primary }}
            variant='contained'
            className='w-96'
          >
            Place order
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
