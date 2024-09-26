import { HotDealCard, SectionHeading } from '@/components';
import { Container } from '@mui/material';
import { Flex } from 'antd';

const HotDealsList = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '3rem', overflow: 'auto' }}
    >
      <SectionHeading title='Hot Deals' />
      <Flex
        container
        gap={10}
        justify='space-between'
        style={{ overflowX: 'auto' }}
      >
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
      </Flex>
    </Container>
  );
};

export default HotDealsList;
