import Image from 'next/image';
import img from '@/assets/sponsor/1.png';
import { Box } from '@mui/material';

const PartnerCard = ({img}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '200px' }}>
      <Image
        src={img}
        width={1000}
        height={110}
        alt='Pulse Oximeter'
        style={{ borderRadius: '100000px' }}
      />
    </Box>
  );
};

export default PartnerCard;
