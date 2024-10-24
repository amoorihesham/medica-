import { Button, Typography } from '@mui/material';

const SectionHeading = ({ title, url }) => {
  return (
    <div className='flex justify-between items-center'>
      <Typography
        variant='secHeading'
        component='h1'
        color='primary'>
        {title}
      </Typography>
      {url && (
        <Button
          variant='linkButton'
          type='link'
          href={url}>
          See more
        </Button>
      )}
    </div>
  );
};

export default SectionHeading;
