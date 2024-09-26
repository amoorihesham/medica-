import { Box } from '@mui/material';
import Image from 'next/image';
import pulse from '@/assets/product/product.png';
const HotDealCard = () => {
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
        className='w-100'
        alt='Pulse Oximeter'
      />
    </Box>
  );
};

export default HotDealCard;
