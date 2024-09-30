import Image from 'next/image';
import img from '@/assets/sponsor/1.png';
import { Box } from '@mui/material';

const PartnerCard = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '200px' }}>
      <Image
        src={img}
        width={1000}
        height={110}
        alt='Pulse Oximeter'
      />
    </Box>
  );
};

export default PartnerCard;
