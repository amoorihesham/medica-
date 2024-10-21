'use client';
import { Box, Container } from '@mui/material';
import { SectionHeading, HotDealCard } from '@/components';
import { spacing } from '@/styles';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setProductsList } from '@/redux/slices/hotDealsSlice';
import StateProvider from '@/components/Provider';

const HotDealsList = ({ hotDeals, title, url }) => {
  return (
    <Box>
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
    </Box>
  );
};

export default HotDealsList;
