import { Container } from '@mui/material';
import { Flex } from 'antd';
import { PartnerCard, SectionHeading } from '@/components';

const PartnersList = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '3rem' }}
    >
      <SectionHeading title='Our Partners' />
      <Flex
        container
        gap={10}
        justify='space-between'
        style={{ overflowX: 'auto' }}
      >
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
      </Flex>
    </Container>
  );
};

export default PartnersList;
