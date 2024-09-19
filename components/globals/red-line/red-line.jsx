import { Box, Container, Typography } from '@mui/material';
const RedLine = () => {
  return (
    <Box
      component='div'
      sx={{ bgcolor: '#FF4646', height: '40px' }}
    >
      <Container maxWidth='xl'>
        <Typography color='white'>Hello There.</Typography>
      </Container>
    </Box>
  );
};

export default RedLine;
