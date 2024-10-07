import { TopProductsList } from '@/sections';
import { getProduct } from '@/utils/productFunc';
import ScrollUp from '@/hook/ScrollUp';
import StateProvider from '@/components/Provider';

export default async function TopProductsPage() {
  const topProductsList = await getProduct({ topProducts: 1 });
  return (
    <>
      <ScrollUp />
      <StateProvider>
        <TopProductsList productsList={topProductsList} />
      </StateProvider>
    </>
  );
}
