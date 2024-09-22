import { Box, Container } from '@mui/material';
import { Flex } from 'antd';
import Link from 'next/link';

const CategoriesNavbar = () => {
  return (
    <Box
      sx={{
        boxShadow: '4px 5px 10px 0px #00000038',
        height: '62px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth='xl'>
        <Flex
          gap={10}
          justify='space-between'
        >
          <Link href='/'>Medicin</Link>
          <Link href='/'>Medicin</Link>
          <Link href='/'>Medicin</Link>
          <Link href='/'>Medicin</Link>
          <Link href='/'>Medicin</Link>
          <Link href='/'>Medicin</Link>
          <Link href='/'>Medicin</Link>
          <Link href='/'>Medicin</Link>
          <Link href='/'>Medicin</Link>
          <Link href='/'>Medicin</Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default CategoriesNavbar;
