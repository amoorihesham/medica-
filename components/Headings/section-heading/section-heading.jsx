import { Typography } from '@mui/material';

const SectionHeading = ({ title }) => {
  return (
    <Typography
      variant='h4'
      component='h1'
      sx={{ margin: '1rem 0', color: '#164B60', fontSize: '18px', fontWeight: '500' }}
    >
      {title}
    </Typography>
  );
};

export default SectionHeading;
