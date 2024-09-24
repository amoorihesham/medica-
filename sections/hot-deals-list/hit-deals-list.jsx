import { HotDealCard, SectionHeading } from '@/components';
import { Grid2, Box, Container } from '@mui/material';

const HotDealsList = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '3rem' }}
    >
      <SectionHeading title='Hot Deals' />
      <Grid2
        container
        justifyContent='space-between'
        sx={{ marginTop: '1rem' }}
      >
        <Grid2>
          <HotDealCard />
        </Grid2>
        <Grid2>
          <HotDealCard />
        </Grid2>
        <Grid2>
          <HotDealCard />
        </Grid2>
        <Grid2>
          <HotDealCard />
        </Grid2>
        <Grid2>
          <HotDealCard />
        </Grid2>
        <Grid2>
          <HotDealCard />
        </Grid2>
        <Grid2>
          <HotDealCard />
        </Grid2>
        <Grid2>
          <HotDealCard />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default HotDealsList;
