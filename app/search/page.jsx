import { GridView, ListAltOutlined, Menu } from '@mui/icons-material';
import { Box, Container, Divider, Typography } from '@mui/material';
import { FilterList } from '@/components';
import { ProductList } from '@/sections';

const productsList = [
  {
    id: 1,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 2,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 3,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 4,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 5,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: false, value: '70' },
  },
  {
    id: 6,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 7,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 8,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 9,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 10,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: false, value: '70' },
  },
];
const Search = (query) => {
  return (
    <Box sx={{ marginTop: '2rem' }}>
      <Container
        maxWidth='xl'
        sx={{ display: 'flex', gap: '2rem' }}
      >
        <Box>
          <Typography
            variant='h6'
            component='h6'
          >
            Filter
          </Typography>
          <FilterList />
        </Box>
        <Box>
          <Typography
            variant='h6'
            component='h6'
          >
            Panadol Extra 24 Taplets
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '2rem',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Menu />
              <GridView />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography
                variant='body2'
                component='p'
              >
                Sort by
              </Typography>
              <ListAltOutlined />
            </Box>
          </Box>
          <Divider sx={{ marginBlock: '1rem' }} />
          <ProductList productList={productsList} />
        </Box>
      </Container>
    </Box>
  );
};

export default Search;
