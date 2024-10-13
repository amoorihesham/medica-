import { Box, Container } from '@mui/material';
import { SearchInput } from '@/components/Inputs';
import Navigations from '@/components/Layout/header/navigations';
import { colors } from '@/styles';

const styles = {
  header: {
    bgcolor: colors.primary,
    minHeight: {
      xs: '15vh',
      sm: '25vh',
      md: '25vh',
    },
  },
};

const Header = () => {
  return (
    <Box
      component='header'
      sx={styles.header}>
      <Navigations />
      <Container
        maxWidth='xl'
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <SearchInput />
      </Container>
    </Box>
  );
};

export default Header;
