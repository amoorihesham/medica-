import { Box, Container } from '@mui/material';
import { Flex } from 'antd';
import { SearchInput, LogoNav, Navigations } from '@/components';
import { colors } from '@/styles';

const styles = {
  header: {
    bgcolor: colors.primary,
    minHeight: {
      xs: '19vh',
      sm: '20vh',
      md: '35vh',
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
      <Container
        maxWidth='xl'
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <SearchInput />
      </Container>
    </Box>
  );
};

export default Header;
