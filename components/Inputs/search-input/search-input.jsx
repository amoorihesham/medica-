'use client';
import { SearchOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';

const SearchInput = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: { xs: '60px', md: '100px' },
        width: '50%',
      }}>
      <Box
        position='relative'
        width='100%'>
        <SearchOutlined
          fontSize='small'
          sx={{ position: 'absolute', top: '8px', left: '6px', color: '#9ca3af ' }}
        />
        <input
          type='text'
          placeholder='Search...'
          className='w-full  bg-mpink py-2 px-7 rounded-l-md placeholder:text-sm placeholder:text-gray-400 outline-none'
        />
      </Box>
      <button className='text-white text-sm font-bold bg-sBlue  px-3 h-10 rounded-r-md'>
        Search
      </button>
    </Box>
  );
};

export default SearchInput;
