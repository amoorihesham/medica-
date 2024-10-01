import { Box, Container } from '@mui/material';
import { SectionHeading, HotDealCard } from '@/components';
import { spacing } from '@/styles';

const HotDealsList = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: spacing.sectionmargin }}
    >
      <SectionHeading title='Hot Deals' />

      <Box
        component='div'
        className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'
      >
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
      </Box>
    </Container>
  );
};

export default HotDealsList;
