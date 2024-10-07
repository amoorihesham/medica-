import { HotDealsList, PartnersList, ProductList, CategoriesList } from '@/sections';
import { RedLine, Slider, SeeMoreBtn, CategoriesNavbar, GomlaMainBtn } from '@/components';
import { cookies } from 'next/headers';
import { Container } from '@mui/material';
import axios from 'axios';
import { getProduct } from '@/utils/productFunc';
import { getCategory } from '@/utils/categoryFunc';
import { getBrand } from '@/utils/brandFunc';
import useScrollUp from '@/hook/ScrollUp';
import ScrollUp from '@/hook/ScrollUp';
import { getDrug, getGomla } from '@/utils/adsFunc';
import { getBanners } from '@/utils/bannersFunc';

export default async function Home() {
   const user = null 
  const productsList = await getProduct({allItems: 1});
  const hotDealsList = await getProduct({hotDeal: 1});
  const topProductsList = await getProduct({topProducts: 1});
  const categoriesList = await getCategory();
  const brandList = await getBrand();
  const gomla = await getGomla();
  const drug = await getDrug();
  const banners = await getBanners();
  console.log('gomla', gomla);
  console.log('drug', drug);
  return (
    <>
    <ScrollUp/>
      <RedLine
        title={
          user && user.activated
            ? 'You Will get A free shipping on oreder over than 1k.'
            : 'Your Account Need To Be Activated'
        }
      />
      <Slider banners={banners} />
      <CategoriesList categoriesList={categoriesList} />
      {/* {user && (
        <> */}
          <Container maxWidth='xl'>
            <GomlaMainBtn gomla={gomla} drug={drug}  />
          </Container>
          <HotDealsList hotDeals={hotDealsList} />
          <PartnersList brand={brandList} />
        {/* </>
      )} */}
      <ProductList
        title='Top Products'
        productList={topProductsList}
      />
      <ProductList
        title='All Products'
        productList={productsList}
      />
      <SeeMoreBtn url='/products' />
    </>
  );
}
