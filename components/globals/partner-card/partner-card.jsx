import { Box } from '@mui/material';
import Image from 'next/image';
import pulse from '@/assets/product/product.png';
const PartnerCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#C6C3C3',
        padding: '1rem',
        borderRadius: '50%',
        width: '100px',
        height: '100px',
      }}
    >
      <Image
        src={pulse}
        width={88}
        height={110}
        alt='Pulse Oximeter'
      />
    </Box>
  );
};

export default PartnerCard;
