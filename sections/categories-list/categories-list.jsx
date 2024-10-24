'use client';
import { CategoryCard } from '@/components/Cards';
import { Box, Container } from '@mui/material';

const CategoriesList = ({ categoriesList }) => {
  return (
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
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '2rem',
        }}>
        {categoriesList?.map((category) => (
          <CategoryCard
            category={category}
            key={category.id}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CategoriesList;
