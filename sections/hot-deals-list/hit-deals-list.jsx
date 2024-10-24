'use client';
import { Box } from '@mui/material';
import { SectionHeading, HotDealCard } from '@/components';

const HotDealsList = ({ hotDeals }) => {
  return (
    <Box>
      <SectionHeading
        title='Hot Deals'
        url='/hot-deals'
      />

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
          {hotDeals?.map((hotDeal) => (
            <HotDealCard
              key={hotDeal.id}
              hotDeal={hotDeal}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HotDealsList;
