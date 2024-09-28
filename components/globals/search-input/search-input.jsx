'use client';
import { SearchOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Input, Button } from 'antd';

const SearchInput = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: { xs: '80px', md: '150px' },
        width: '100%',
      }}
    >
      <Input.Search
        placeholder='search'
        fullWidth={true}
        size='large'
        prefix={
          <SearchOutlined
            fontSize='small'
            sx={{ color: 'gray', marginTop: '3px' }}
          />
        }
        enterButton={
          <Button
            style={{
              backgroundColor: '#1B6B93',
              color: 'white',
              borderRaduis: '0',
              border: 'none',
              height: '40px',
              marginLeft: '-10px',
            }}
          >
            Search
          </Button>
        }
      />
    </Box>
  );
};

export default SearchInput;
