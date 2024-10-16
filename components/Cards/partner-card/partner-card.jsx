import { Box } from '@mui/material';

const PartnerCard = ({ img }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#C6C3C3',
        backgroundImage: `url(${img})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '150px',
        borderRadius: '100000px',
        height: '150px',
      }}>
      {/* <Image
        src={img}
        width={100}
        height={100}
        alt='Pulse Oximeter'
        style={{backgroundColor: '#C6C3C3',objectFit: 'cover', borderRadius: '100000px'}}
      /> */}
    </Box>
  );
};

export default PartnerCard;
