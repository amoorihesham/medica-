import { Container } from '@mui/material';
import StateProvider from '@/components/Provider';
import { HotDealsList, PartnersList, ProductList, CategoriesList } from '@/sections';
import { RedLine, Slider, GomlaMainBtn } from '@/components';
import { getProduct } from '@/utils/productFunc';
import { getCategory } from '@/utils/categoryFunc';
import { getBrand } from '@/utils/brandFunc';
import { getDrug, getGomla } from '@/utils/adsFunc';
import { getBanners } from '@/utils/bannersFunc';
import ScrollUp from '@/hook/ScrollUp';

export default async function Home() {
  const productsList = await getProduct({ allItems: 1 });
  const hotDealsList = await getProduct({ hotDeal: 1 });
  const topProductsList = await getProduct({ topProducts: 1 });
  const categoriesList = await getCategory();
  const brandsList = await getBrand();
  const gomla = await getGomla();
  const drug = await getDrug();
  const banners = await getBanners();

  return (
    <>
      <ScrollUp />
      <RedLine title='Account Need To Be Activated' />
      <StateProvider>
        <Slider banners={banners} />
        <CategoriesList categoriesList={categoriesList} />
        <Container maxWidth='xl'>
          <GomlaMainBtn
            gomla={gomla}
            drug={drug}
          />
        </Container>
        <HotDealsList hotDeals={hotDealsList} />
        <PartnersList brands={brandsList} />
        <ProductList
          title='Top Products'
          url={'/top-products'}
          productList={topProductsList}
        />
        <ProductList
          title='All Products'
          url={'/products'}
          productList={productsList}
        />
      </StateProvider>
    </>
  );
}
