import { PartnerCard } from '@/components';
import { Typography, Grid2, Box, Container } from '@mui/material';

const PartnersList = () => {
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
          Our Sponsors
        </Typography>
        <Grid2
          container
          justifyContent='space-between'
        >
          <Grid2>
            <PartnerCard />
          </Grid2>
          <Grid2>
            <PartnerCard />
          </Grid2>
          <Grid2>
            <PartnerCard />
          </Grid2>
          <Grid2>
            <PartnerCard />
          </Grid2>
          <Grid2>
            <PartnerCard />
          </Grid2>
          <Grid2>
            <PartnerCard />
          </Grid2>
          <Grid2>
            <PartnerCard />
          </Grid2>
          <Grid2>
            <PartnerCard />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default PartnersList;
