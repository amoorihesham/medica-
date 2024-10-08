import { PartnersList } from '@/sections';
import { getBrand } from '@/utils/brandFunc';
import ScrollUp from '@/hook/ScrollUp';
import StateProvider from '@/components/Provider';
import { Box, Pagination } from '@mui/material';

export default async function PartnersPage() {
  const brandsList = await getBrand();

  return (
    <>
      <ScrollUp />
      <StateProvider>
        <PartnersList brands={brandsList} />
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBlock: '2rem' }}>
          <Pagination count={10} />
        </Box>
      </StateProvider>
    </>
  );
}
