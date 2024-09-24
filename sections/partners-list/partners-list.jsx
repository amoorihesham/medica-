import { PartnerCard, SectionHeading } from '@/components';
import { Grid2, Container } from '@mui/material';

const PartnersList = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '3rem' }}
    >
      <SectionHeading title='Our Partners' />
      <Grid2
        container
        justifyContent='space-between'
        sx={{ marginTop: '1rem' }}
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
  );
};

export default PartnersList;
