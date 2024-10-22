import { colors } from '@/styles';
import { Box, Container, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const RedLine = ({ title }) => {
  return (
    <Box
      component='div'
      sx={{ bgcolor: '#FF4646', height: '40px' }}>
      <Container maxWidth='xl'>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            width: '100%',
            height: '40px',
          }}>
          <ErrorOutlineIcon sx={{ color: 'white' }} />
          <Typography
            sx={{
              color: colors.primaryText,
              fontSize: {
                xs: '10px',
                sm: '14px',
                md: '16px',
              },
            }}>
            {title}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default RedLine;
