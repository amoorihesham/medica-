'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPartnersList } from '@/redux/slices/partnersSlice';
import { PartnerCard, SectionHeading } from '@/components';
import { Box } from '@mui/material';

const PartnersList = ({ brands }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPartnersList(brands));
  }, []);
  return (
    <div className=' ml-7 mt-5'>
      <SectionHeading
        title='Our Partners'
        url={'/partners'}
      />
      <Box   sx={{overflowX: 'scroll',
          whiteSpace: 'nowrap',
          width: '100%',
          display: 'flex',
          '&::-webkit-scrollbar': {
            display: 'none',
          }}} className=' flex mt-5 gap-5'>
        {brands?.map((brand) => (
          <div
            className=' flex flex-col justify-center items-center'
            key={brand.id}>
            <PartnerCard img={brand?.image} />
            <p className=' font-semibold text-[24px]'>{brand?.name}</p>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default PartnersList;
