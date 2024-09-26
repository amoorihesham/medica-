import { Box, Container } from '@mui/material';
import { Flex } from 'antd';
import { SearchInput, LogoNav, Navigations } from '@/components';
import { colors } from '@/styles';

const styles = {
  header: {
    bgcolor: colors.primary,
    height: {
      md: '50vh',
      xs: '25vh',
    },
  },
};

const Header = ({ user }) => {
  return (
    <Box
      component='header'
      sx={styles.header}
    >
      <Navigations user={user} />
      <Container maxWidth='xl'>
        <SearchInput />
      </Container>
    </Box>
  );
};

export default Header;
