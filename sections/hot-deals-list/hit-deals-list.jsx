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
          sx={{
            overflowX: 'scroll',
            whiteSpace: 'nowrap',
            width: '100%',
            display: 'flex',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}>
          <Box
            component='div'
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '2rem',
            }}>
            <HotDealCard />
            {/* {hotDeals?.map((hotDeal) => (
            <HotDealCard
              key={hotDeal.id}
              hotDeal={hotDeal}
            />
          ))} */}
          </Box>
        </Box>
      </StateProvider>
    </Container>
  );
};

export default HotDealsList;
