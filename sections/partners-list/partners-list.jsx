'use client';
import { Box, Container } from '@mui/material';
import { PartnerCard, SectionHeading } from '@/components';
import { spacing } from '@/styles';
import { useScroll, useTransform, motion } from 'framer-motion';

const PartnersList = () => {
  const { scrollXProgress } = useScroll();
  const x = useTransform(scrollXProgress, [0, 1], [0, -300]);
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '2rem', position: 'relative' }}
    >
      <SectionHeading title='Our Partners' />
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
      >
        <motion.div
          style={{
            x,
            display: 'flex',
          }}
          animate={{ x: ['0%', '-100%'] }} // Scroll from 0% to -100% of the container width
          transition={{
            repeat: Infinity, // Infinite looping
            ease: 'linear', // Smooth transition
            duration: 50, // Adjust duration for speed
          }}
        >
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
        </motion.div>
        <motion.div
          style={{
            x,
            display: 'flex',
          }}
          animate={{ x: ['0%', '-100%'] }} // Scroll from 0% to -100% of the container width
          transition={{
            repeat: Infinity, // Infinite looping
            ease: 'linear', // Smooth transition
            duration: 50, // Adjust duration for speed
          }}
        >
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
        </motion.div>
      </Box>
    </Container>
  );
};

export default PartnersList;
