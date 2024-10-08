import { GridView, ListAltOutlined, Menu } from '@mui/icons-material';
import { Box, Container, Divider, Typography } from '@mui/material';
import { FilterList } from '@/components';
import { ProductList } from '@/sections';
import StateProvider from '@/components/Provider';

const Search = ({ searchParams }) => {
  return (
    <Box sx={{ marginTop: '2rem' }}>
      <Container
        maxWidth='xl'
        sx={{ display: 'flex', gap: '2rem' }}>
        <Box>
          <Typography
            variant='h6'
            component='h6'>
            Filter
          </Typography>
          <FilterList />
        </Box>
        <Box>
          <Typography
            variant='h6'
            component='h6'>
            Panadol Extra 24 Taplets
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '2rem',
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Menu />
              <GridView />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography
                variant='body2'
                component='p'>
                Sort by
              </Typography>
              <ListAltOutlined />
            </Box>
          </Box>

          <Divider sx={{ marginBlock: '1rem' }} />
          <StateProvider>
            <ProductList productList={[]} />
          </StateProvider>
        </Box>
      </Container>
    </Box>
  );
};

export default Search;
