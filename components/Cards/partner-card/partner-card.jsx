import { Box, Typography } from '@mui/material';

const PartnerCard = ({ image, name }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap={1}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#C6C3C3',
          backgroundImage: `url(${image})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          width: '110px',
          borderRadius: '100000px',
          height: '110px',
        }}></Box>
      <Typography
        variant='h6'
        textTransform='uppercase'>
        {name}
      </Typography>
    </Box>
  );
};

export default PartnerCard;
