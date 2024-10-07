'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPartnersList } from '@/redux/slices/partnersSlice';
import { PartnerCard, SectionHeading } from '@/components';

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
      <div className=' flex mt-5'>
        {brands?.map((brand) => (
          <div
            className=' flex flex-col justify-center items-center'
            key={brand.id}>
            <PartnerCard img={brand?.image} />
            <p className=' font-semibold text-[24px]'>{brand?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersList;
