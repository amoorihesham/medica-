'use client';
import { Box, Container } from '@mui/material';
import { PartnerCard, SectionHeading } from '@/components';
import { spacing } from '@/styles';
import { useScroll, useTransform, motion } from 'framer-motion';

const PartnersList = ({ brand }) => {
  const { scrollXProgress } = useScroll();
  const x = useTransform(scrollXProgress, [0, 1], [0, -300]);
  return (
    // <Container
    //   maxWidth='xl'
    //   sx={{ marginTop: '2rem', position: 'relative' }}
    // >
    //   <SectionHeading title='Our Partners' />
    //   <Box
    //     sx={{
    //       overflowX: 'scroll',
    //       whiteSpace: 'nowrap',
    //       width: '100%',
    //       display: 'flex',
    //       '&::-webkit-scrollbar': {
    //         display: 'none',
    //       },
    //     }}
    //   >
    <div className=' ml-7 mt-5'>
      <div className='flex justify-between items-center'>
<h3 className=' font-semibold text-header_color text-header_size' >Our Partners</h3>
<p className=' font-semibold text-header_color mr-7' >See all</p>
      </div>
        <div className=' flex mt-5' >
          {brand?.map((brand) => (          
          <div className=' flex flex-col justify-center items-center'>
        <PartnerCard img={brand?.image} />
        <p className=' font-semibold text-[24px]' >{brand?.name}</p>
          </div>
          ))}
        </div>
    </div>
    //     <motion.div
    //       style={{
    //         x,
    //         display: 'flex',
    //       }}
    //       animate={{ x: ['0%', '-100%'] }} // Scroll from 0% to -100% of the container width
    //       transition={{
    //         repeat: Infinity, // Infinite looping
    //         ease: 'linear', // Smooth transition
    //         duration: 50,
    //          // Adjust duration for speed
    //       }}
    //     >
    //       <PartnerCard />
       
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //     </motion.div>
    //     <motion.div
    //       style={{
    //         x,
    //         display: 'flex',
    //       }}
    //       animate={{ x: ['0%', '-100%'] }} // Scroll from 0% to -100% of the container width
    //       transition={{
    //         repeat: Infinity, // Infinite looping
    //         ease: 'linear', // Smooth transition
    //         duration: 50, // Adjust duration for speed
    //       }}
    //     >
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //       <PartnerCard />
    //     </motion.div>
    //   </Box>
    // </Container>
  );
};

export default PartnersList;
