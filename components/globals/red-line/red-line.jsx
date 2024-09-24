import { Box, Container, Typography } from '@mui/material';
const RedLine = ({ title }) => {
  return (
    <Box
      component='div'
      sx={{ bgcolor: '#FF4646', height: '40px' }}
    >
      <Container maxWidth='xl'>
        <Box sx={{ display: 'flex', alignItems: 'center', height: '40px' }}>
          <Typography color='white'>{title}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default RedLine;
