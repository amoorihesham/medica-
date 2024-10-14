import { Box } from '@mui/material';
import StateProvider from '@/components/Provider';
import CartList from '@/sections/cart-list/cart-list';

export default function Cart() {
  return (
    <Box>
      <StateProvider>
        <CartList />
      </StateProvider>
    </Box>
  );
}
