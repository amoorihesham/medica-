import { CategoryCard } from '@/components';
import { Container, Grid2 } from '@mui/material';
import { Flex } from 'antd';

const CategoriesList = ({ categoriesList }) => {
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '2rem' }}
    >
      <Flex
        container
        gap={10}
        justify='space-between'
        style={{ overflowX: 'auto' }}
      >
        {categoriesList?.map((category) => (
          <CategoryCard
            category={category}
            key={category.id}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default CategoriesList;
