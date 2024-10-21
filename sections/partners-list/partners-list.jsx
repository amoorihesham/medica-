'use client';
import { Box } from '@mui/material';
import { PartnerCard, SectionHeading } from '@/components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPartnersAsync } from '@/redux/asyncs/partners';

const PartnersList = () => {
  const { partners, isLoading } = useSelector((state) => state.partners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPartnersAsync()).unwrap();
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }

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
        className=' flex mt-5 gap-5'>
        {!partners.length && <p>No partners found.</p>}
        {partners?.map((brand) => (
          <div
            className=' flex flex-col justify-center items-center'
            key={brand.id}>
            <PartnerCard img={brand?.image} />
            <p className=' font-medium text[#164B60] text-[24px]'>{brand?.name}</p>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default PartnersList;
