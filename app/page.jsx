'use client';
import { Container, Stack } from '@mui/material';
import { HotDealsList, PartnersList, ProductList, CategoriesList } from '@/sections';
import { RedLine, Slider, GomlaMainBtn } from '@/components';
import ScrollUp from '@/hook/ScrollUp';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from '@/redux/slices/authSlice';
import { getBannersAsync } from '@/redux/asyncs/banners';
import { getCategoriesAsync } from '@/redux/asyncs/categories';
import { getHotDealsAsync } from '@/redux/asyncs/hotDeals';
import { getProductsAsync } from '@/redux/asyncs/products';
import { getTopProductsAsync } from '@/redux/asyncs/topProducts';

export default function Home() {
  const { banners } = useSelector((state) => state.banners);
  const { categories } = useSelector((state) => state.categories);
  const { hotDeals } = useSelector((state) => state.hotDeals);
  const { topProducts } = useSelector((state) => state.topProducts);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const ParllerFetches = async () => {
    await dispatch(getBannersAsync()).unwrap();
    await dispatch(getCategoriesAsync()).unwrap();
    await dispatch(getHotDealsAsync()).unwrap();
    await dispatch(getProductsAsync()).unwrap();
    await dispatch(getTopProductsAsync()).unwrap();
  };
  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
    }
    ParllerFetches();
  }, []);
  return (
    <>
      <ScrollUp />
      <RedLine title='Account Need To Be Activated' />
      <Container
        maxWidth='xl'
        sx={{ marginTop: '2.5rem' }}>
        <Stack spacing={5}>
          <Slider banners={banners} />
          <CategoriesList categoriesList={categories} />
          <GomlaMainBtn />
          {!!hotDeals.length && (
            <HotDealsList
              hotDeals={hotDeals}
              title='Hot Deals'
              url='/hot-deals'
            />
          )}
          <PartnersList />
          <ProductList
            title='Top Products'
            url={'/top-products'}
            productList={topProducts}
          />
          <ProductList
            title='All Products'
            url={'/products'}
            productList={products}
          />
        </Stack>
      </Container>
    </>
  );
}
