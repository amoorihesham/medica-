'use client';
import { Container, Stack } from '@mui/material';
import {
  HotDealsList,
  PartnersList,
  ProductList,
  CategoriesList,
  TopProductsList,
} from '@/sections';
import { RedLine, Slider, GomlaMainBtn } from '@/components';
import ScrollUp from '@/hook/ScrollUp';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { getBannersAsync } from '@/redux/asyncs/banners';
import { getCategoriesAsync } from '@/redux/asyncs/categories';
import { getHotDealsAsync } from '@/redux/asyncs/hotDeals';
import { getProductsAsync } from '@/redux/asyncs/products';
import { getTopProductsAsync } from '@/redux/asyncs/topProducts';
import { getPartnersAsync } from '@/redux/asyncs/partners';

export default function Home() {
  const { user } = useSelector((state) => state.auth);
  const { banners } = useSelector((state) => state.banners);
  const { categories } = useSelector((state) => state.categories);
  const { hotDeals } = useSelector((state) => state.hotDeals);
  const { topProducts } = useSelector((state) => state.topProducts);
  const { products } = useSelector((state) => state.products);
  const { partners } = useSelector((state) => state.partners);
  const dispatch = useDispatch();
  const ParllerFetches = useCallback(async () => {
    await dispatch(getBannersAsync()).unwrap();
    await dispatch(getCategoriesAsync()).unwrap();
    await dispatch(getProductsAsync()).unwrap();
    if (user) {
      await dispatch(getHotDealsAsync()).unwrap();
      await dispatch(getTopProductsAsync()).unwrap();
      await dispatch(getPartnersAsync()).unwrap();
    }
  }, [user, dispatch]);

  useEffect(() => {
    ParllerFetches();
  }, [ParllerFetches]);
  return (
    <>
      <ScrollUp />
      {+user?.status === 0 ? <RedLine title='Account Need To Be Activated' /> : null}

      <Container
        maxWidth='xl'
        sx={{ marginTop: '2.5rem' }}>
        <Stack spacing={4}>
          <Slider banners={banners} />
          <CategoriesList categoriesList={categories} />
          {user && (
            <>
              <GomlaMainBtn />
              {!!hotDeals.length && <HotDealsList hotDeals={hotDeals} />}
              <PartnersList partners={partners} />
              <TopProductsList productList={topProducts} />
            </>
          )}
          <ProductList productList={products} />
        </Stack>
      </Container>
    </>
  );
}
