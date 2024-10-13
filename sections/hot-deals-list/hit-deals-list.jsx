'use client';
import { Box, Container } from '@mui/material';
import { SectionHeading, HotDealCard } from '@/components';
import { spacing } from '@/styles';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setProductsList } from '@/redux/slices/hotDealsSlice';
import StateProvider from '@/components/Provider';

const HotDealsList = ({ hotDeals, title, url }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProductsList(hotDeals));
  }, []);

  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: spacing.sectionmargin }}>
      <SectionHeading
        title={title}
        url={url}
      />
      <StateProvider>
        <Box
          component='div'
          className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5'>
          {hotDeals?.map((hotDeal) => (
            <HotDealCard
              key={hotDeal.id}
              hotDeal={hotDeal}
            />
          ))}
        </Box>
      </StateProvider>
    </Container>
  );
};

export default HotDealsList;
