'use client';
import { Box } from '@mui/material';
import { PartnerCard, SectionHeading } from '@/components';

const PartnersList = ({ partners }) => {
  return (
    <Box>
      <SectionHeading
        title='Our Partners'
        url={'/partners'}
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
        }}
        className=' flex mt-3 gap-5'>
        {!partners.length && <p>No partners found.</p>}
        {partners?.map((brand) => (
          <PartnerCard
            {...brand}
            key={brand.id}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PartnersList;
