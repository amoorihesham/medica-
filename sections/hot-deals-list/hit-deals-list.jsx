import { HotDealCard } from '@/components';
import { Typography, Grid2, Box, Container } from '@mui/material';

const HotDealsList = () => {
  return (
    <Box>
      <Container
        maxWidth='xl'
        sx={{ marginTop: '2rem' }}
      >
        <Typography
          variant='h4'
          component='h1'
          sx={{ margin: '1rem 0', color: '#164B60', fontSize: '40px', fontWeight: '500' }}
        >
          Hot Deals
        </Typography>
        <Grid2
          container
          justifyContent='space-between'
        >
          <Grid2>
            <HotDealCard sx={{ marginTop: '2rem' }} />
          </Grid2>
          <Grid2>
            <HotDealCard sx={{ marginTop: '2rem' }} />
          </Grid2>
          <Grid2>
            <HotDealCard sx={{ marginTop: '2rem' }} />
          </Grid2>
          <Grid2>
            <HotDealCard sx={{ marginTop: '2rem' }} />
          </Grid2>
          <Grid2>
            <HotDealCard sx={{ marginTop: '2rem' }} />
          </Grid2>
          <Grid2>
            <HotDealCard sx={{ marginTop: '2rem' }} />
          </Grid2>
          <Grid2>
            <HotDealCard sx={{ marginTop: '2rem' }} />
          </Grid2>
          <Grid2>
            <HotDealCard sx={{ marginTop: '2rem' }} />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default HotDealsList;
