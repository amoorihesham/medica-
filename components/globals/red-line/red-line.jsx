import { Box, Container, Typography } from '@mui/material';
const RedLine = () => {
  return (
    <Box
      component='div'
      sx={{ bgcolor: '#FF4646', height: '40px' }}
    >
      <Container maxWidth='xl'>
        <Box sx={{ display: 'flex', alignItems: 'center', height: '40px' }}>
          <Typography color='white'>Hello There.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default RedLine;
