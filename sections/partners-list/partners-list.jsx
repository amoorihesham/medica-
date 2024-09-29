import { Container } from '@mui/material';
import { Flex } from 'antd';
import { PartnerCard, SectionHeading } from '@/components';
import { spacing } from '@/styles';

const PartnersList = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: spacing.sectionmargin }}
    >
      <SectionHeading title='Our Partners' />
      <Flex
        container
        gap={10}
        justify='space-between'
        style={{ overflowX: 'auto',  }}
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
