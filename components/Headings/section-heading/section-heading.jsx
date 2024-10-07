import { Typography } from '@mui/material';

const SectionHeading = ({ title }) => {
  return (
    <div className='flex justify-between items-center' >
    <Typography
      variant='h4'
      component='h1'
      sx={{ margin: '1rem 0', color: '#164B60', fontSize: '40px', fontWeight: '500' }}
    >
      {title}
    </Typography>
    <p className='text-header_color font-semibold'>See all</p>
    </div>
  );
};

export default SectionHeading;
