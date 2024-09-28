'use client';
import { Box, Container, Typography } from '@mui/material';
import { Flex, Dropdown, Button, Menu } from 'antd';

const CategoriesNavbar = () => {
  const menu = (
    <Menu>
      <Menu.Item key='1'>Item 1</Menu.Item>
      <Menu.Item key='2'>Item 2</Menu.Item>
      <Menu.SubMenu
        key='sub1'
        title='Submenu 1'
      >
        <Menu.Item key='3'>Sub Item 1</Menu.Item>
        <Menu.Item key='4'>Sub Item 2</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key='sub2'
        title='Submenu 2'
      >
        <Menu.Item key='5'>Sub Item 3</Menu.Item>
        <Menu.Item key='6'>Sub Item 4</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );

  return (
    <Box
      sx={{
        boxShadow: '4px 5px 10px 0px #00000038',
        height: '62px',
        display: 'flex',
        alignItems: 'center',

        overflow: 'auto',
      }}
    >
      <Container maxWidth='xl'>
        <Flex
          gap={10}
          justify='space-between'
        >
          <Dropdown
            menu={menu}
            trigger={['hover', 'click']}
          >
            <Button
              size='small'
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              Medicin
            </Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            trigger={['hover', 'click']}
          >
            <Button
              size='small'
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              Medicin
            </Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            trigger={['hover', 'click']}
          >
            <Button
              size='small'
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              Medicin
            </Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            trigger={['hover', 'click']}
          >
            <Button
              size='small'
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              Medicin
            </Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            trigger={['hover', 'click']}
          >
            <Button
              size='small'
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              Medicin
            </Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            trigger={['hover', 'click']}
          >
            <Button
              size='small'
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              Medicin
            </Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            trigger={['hover', 'click']}
          >
            <Button
              size='small'
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              Medicin
            </Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            trigger={['hover', 'click']}
          >
            <Button
              size='small'
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              Medicin
            </Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            trigger={['hover', 'click']}
          >
            <Button
              size='small'
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              Medicin
            </Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            trigger={['hover', 'click']}
          >
            <Button
              size='small'
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              Medicin
            </Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            trigger={['hover', 'click']}
          >
            <Button
              size='small'
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              Medicin
            </Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            trigger={['hover', 'click']}
          >
            <Button
              size='small'
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              Medicin
            </Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            trigger={['hover', 'click']}
          >
            <Button
              size='small'
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              Medicin
            </Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            trigger={['hover', 'click']}
          >
            <Button
              size='small'
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              Medicin
            </Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            trigger={['hover', 'click']}
          >
            <Button
              size='small'
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              Medicin
            </Button>
          </Dropdown>
        </Flex>
      </Container>
    </Box>
  );
};

export default CategoriesNavbar;
