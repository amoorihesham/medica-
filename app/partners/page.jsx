import { PartnersList } from '@/sections';
import { getBrand } from '@/utils/brandFunc';
import ScrollUp from '@/hook/ScrollUp';
import StateProvider from '@/components/Provider';

export default async function PartnersPage() {
  const brandsList = await getBrand();

  return (
    <>
      <ScrollUp />
      <StateProvider>
        <PartnersList brands={brandsList} />
      </StateProvider>
    </>
  );
}
