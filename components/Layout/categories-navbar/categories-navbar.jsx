'use client';
import { Box, Container, MenuItem, Button, Menu, GlobalStyles } from '@mui/material';
import { Flex } from 'antd';
import { useState } from 'react';

const CategoriesNavbar = ({categories,subCategories}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const open = Boolean(anchorEl);
console.log(subCategories);
  const handleClick = ({event,category}) => {
    setAnchorEl(event.currentTarget);
    const {id} = category
    console.log(id);
    let subCategoryForThisCategory = subCategories?.filter((subCategory)=>subCategory?.category_id==id)
    setSubCategory(subCategoryForThisCategory);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        boxShadow: '4px 5px 10px 0px #00000038',
        height: '45px',
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
          <Box sx={{
                  display: 'flex',
                  overflowX: 'scroll',
                  whiteSpace: 'nowrap',
                  width: '100%',
                  display: 'flex',
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}>
            {categories?.map((category) => (
              <div key={category.id} >
              <Button
                key={category.id}
                sx={{
                  textTransform: 'capitalize',
                  color: 'black',
                  fontWeight: '600',
                }}
                    aria-controls={open ? 'simple-menu' : undefined}
              aria-haspopup='true'
             // onMouseEnter={(event)=>handleClick({event,category})}
             onClick={(event)=>handleClick({event,category})}
                >
                {category.name}
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
              {subCategory?.length?
                subCategory?.map((subCategory)=>(
                <MenuItem key={subCategory.id} onClick={handleClose}>{subCategory.name}</MenuItem>
                )):<MenuItem  onClick={handleClose}>No Found Sub Category</MenuItem>
              }
            </Menu> 
              </div>
))}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CategoriesNavbar;
