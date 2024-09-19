import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Flex } from 'antd';
import { LanguageBtn, RegisterLoginBtn, SearchInput, LogoNav } from '@/components';

const Header = () => {
  const styles = {
    header: {
      bgcolor: '#164B60',
      height: '50vh',
      padding: '1rem 0',
    },
  };
  return (
    <Box
      component='header'
      sx={styles.header}
    >
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={2}
          alignItems='center'
        >
          <Grid size={6}>
            <LogoNav />
          </Grid>
          <Grid size={6}>
            <Flex
              justify='end'
              align='center'
              gap={5}
            >
              <LanguageBtn />
              <RegisterLoginBtn />
            </Flex>
          </Grid>
        </Grid>
        <SearchInput />
      </Container>
    </Box>
  );
};

export default Header;
