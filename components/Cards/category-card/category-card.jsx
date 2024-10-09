import { Box, Typography } from '@mui/material';
import Image from 'next/image';
const CategoryCard = ({ category }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#C6C3C3',
            padding: '1rem',
            borderRadius: '7.5px',
            width: '150px',
            height: '123px',
          }}>
          <Image
            src={category?.image}
            width={88}
            height={110}
            alt='Pulse Oximeter'
          />
        </Box>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '500',
            color: '#363839',
            textAlign: 'center',
            marginTop: '.5rem',
          }}>
          {category.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default CategoryCard;
