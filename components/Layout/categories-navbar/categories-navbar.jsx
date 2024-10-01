'use client';
import { Box, Container, MenuItem, Button, Menu, GlobalStyles } from '@mui/material';
import { Flex } from 'antd';
import { useState } from 'react';

const CategoriesNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        boxShadow: '4px 5px 10px 0px #00000038',
        height: '62px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Container maxWidth='xl'>
        <Flex
          gap={10}
          justify='space-between'
        >
          <GlobalStyles
            styles={{ '.MuiPaper-root': { boxShadow: '0px 0px 6px 0px #0000000a !important' } }}
          />
          <Box>
            <Button
              aria-controls={open ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
            >
              Dropdown
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
          </Box>
          <Box>
            <Button
              aria-controls={open ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
            >
              Dropdown
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
          </Box>
          <Box>
            <Button
              aria-controls={open ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
            >
              Dropdown
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
          </Box>
          <Box>
            <Button
              aria-controls={open ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
            >
              Dropdown
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
          </Box>
          <Box>
            <Button
              aria-controls={open ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
            >
              Dropdown
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
          </Box>
          <Box>
            <Button
              aria-controls={open ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
            >
              Dropdown
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
          </Box>
          <Box>
            <Button
              aria-controls={open ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
            >
              Dropdown
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
          </Box>
          <Box>
            <Button
              aria-controls={open ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
            >
              Dropdown
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
          </Box>
          <Box>
            <Button
              aria-controls={open ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
            >
              Dropdown
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
          </Box>
          <Box>
            <Button
              aria-controls={open ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
            >
              Dropdown
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
          </Box>
          <Box>
            <Button
              aria-controls={open ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
            >
              Dropdown
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
          </Box>
          <Box>
            <Button
              aria-controls={open ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
            >
              Dropdown
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
          </Box>
          <Box>
            <Button
              aria-controls={open ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
            >
              Dropdown
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CategoriesNavbar;
