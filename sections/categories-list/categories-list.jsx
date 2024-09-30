'use client';
import { CategoryCard } from '@/components';
import { Box, Container, Paper } from '@mui/material';

import { useScroll, useTransform, motion } from 'framer-motion';

const CategoriesList = ({ categoriesList }) => {
  const { scrollXProgress } = useScroll();
  const x = useTransform(scrollXProgress, [0, 1], [0, -300]);
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '2rem', position: 'relative' }}
    >
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
            justifyContent: 'space-between',
            gap: '2rem',
            marginLeft: '2rem',
          }}
          animate={{ x: ['0%', '-100%'] }} // Scroll from 0% to -100% of the container width
          transition={{
            repeat: Infinity, // Infinite looping
            ease: 'linear', // Smooth transition
            duration: 30, // Adjust duration for speed
          }}
        >
          {categoriesList?.map((category) => (
            <CategoryCard
              category={category}
              key={category.id}
            />
          ))}
        </motion.div>
        <motion.div
          style={{
            x,
            display: 'flex',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
          animate={{ x: ['0%', '-100%'] }} // Scroll from 0% to -100% of the container width
          transition={{
            repeat: Infinity, // Infinite looping
            ease: 'linear', // Smooth transition
            duration: 30, // Adjust duration for speed
          }}
        >
          {categoriesList?.map((category) => (
            <CategoryCard
              category={category}
              key={category.id}
            />
          ))}
        </motion.div>
      </Box>
    </Container>
  );
};

export default CategoriesList;
