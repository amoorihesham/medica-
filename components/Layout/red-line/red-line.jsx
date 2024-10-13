import { colors } from '@/styles';
import { Box, Container, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const RedLine = ({ title }) => {
  return (
    <Box
      component='div'
      sx={{ bgcolor: '#FF4646', height: '40px' }}
    >
      <Container maxWidth='xl'>
        <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-between',width: '100%', height: '40px' }}>
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
          <ErrorOutlineIcon sx={{ color: 'white' }} />
        </Box>
      </Container>
    </Box>
  );
};

export default RedLine;
