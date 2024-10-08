import { TopProductsList } from '@/sections';
import { getProduct } from '@/utils/productFunc';
import ScrollUp from '@/hook/ScrollUp';
import StateProvider from '@/components/Provider';
import { Box, Pagination } from '@mui/material';

export default async function TopProductsPage() {
  const topProductsList = await getProduct({ topProducts: 1 });
  return (
    <>
      <ScrollUp />
      <StateProvider>
        <TopProductsList productsList={topProductsList} />
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBlock: '2rem' }}>
          <Pagination count={10} />
        </Box>
      </StateProvider>
    </>
  );
}
