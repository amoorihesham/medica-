import { HotDealsList } from '@/sections';
import { getProduct } from '@/utils/productFunc';
import ScrollUp from '@/hook/ScrollUp';
import StateProvider from '@/components/Provider';
import { Box, Pagination } from '@mui/material';

export default async function HotDealsPage() {
  const hotDealsList = await getProduct({ hotDeal: 1 });

  return (
    <>
      <ScrollUp />

      <StateProvider>
        <HotDealsList
          hotDeals={hotDealsList}
          title='Hot Deals'
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBlock: '2rem' }}>
          <Pagination count={10} />
        </Box>
      </StateProvider>
    </>
  );
}
