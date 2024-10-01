import { colors } from '@/styles';
import { Box, Container, Typography } from '@mui/material';
const RedLine = ({ title }) => {
  return (
    <Box
      component='div'
      sx={{ bgcolor: '#FF4646', height: '40px' }}
    >
      <Container maxWidth='xl'>
        <Box sx={{ display: 'flex', alignItems: 'center', height: '40px' }}>
          <Typography
            sx={{
              color: colors.primaryText,
              fontSize: {
                xs: '10px',
                sm: '14px',
                md: '16px',
              },
            }}
          >
            {title}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default RedLine;
