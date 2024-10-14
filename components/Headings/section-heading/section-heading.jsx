import { Typography } from '@mui/material';
import Link from 'next/link';

const SectionHeading = ({ title, url }) => {
  return (
    <div className='flex justify-between items-center'>
      <Typography
        variant='h4'
        component='h1'
        sx={{ margin: '1rem 0', color: '#164B60',width: '90%', fontSize: '34px', fontWeight: '500' }}>
        {title}
      </Typography>
      {url && (
        <Link
          href={url}
          className='w-16 font-semibold text-header_color mr-1'>
          See All
        </Link>
      )}
    </div>
  );
};

export default SectionHeading;
