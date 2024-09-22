import Image from 'next/image';
import { CategoriesNavbar } from '@/components';
import { Flex } from 'antd';
import { Box, Container, Typography, Divider } from '@mui/material';
import { FavoriteOutlined } from '@mui/icons-material';
import product from '@/assets/product/OIP.png';

const Product = ({ params }) => {
  console.log(params);
  return (
    <Box>
      <CategoriesNavbar />
      <Container
        maxWidth='xl'
        sx={{ marginTop: '2rem' }}
      >
        <Flex gap={100}>
          <Box sx={{ display: 'flex' }}>
            <Image
              src={product}
              alt='Product'
              width={500}
              height={519}
            />
            <FavoriteOutlined />
          </Box>
          <Divider
            orientation='vertical'
            flexItem
          />
          <Box>
            <Typography
              variant='h2'
              component='h1'
              sx={{ fontSize: '36px', fontWeight: '700' }}
            >
              Panadol Extra 24 Tablets
            </Typography>
            <Typography
              variant='body2'
              component='p'
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '.5rem',
                color: '#C6C3C3',
                fontSize: '18px',
                fontWeight: '700',
                margin: '2rem 0',
              }}
            >
              Sold by
              <Typography
                sx={{ color: '#5FF529', fontweight: '700' }}
                component='span'
              >
                124856
              </Typography>
            </Typography>
            <Typography
              sx={{
                backgroundColor: '#1B6B93',
                fontWeight: '700',
                fontSize: '20px',
                color: 'white',
                width: 'fit-content',
                padding: '.2rem .5rem',
                borderRadias: '6px',
                margin: '2rem 0',
              }}
            >
              Medicin
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '1rem 0',
              }}
            >
              <Typography sx={{ fontSize: '26px', fontWeight: '700', color: '#1B6B93' }}>
                EGP 800
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#595D5F',
                }}
              >
                EGP 900
              </Typography>
              <Typography sx={{ fontSize: '20px', fontWeight: '700', color: '#F48C15' }}>
                10% Discount
              </Typography>
            </Box>
            <Divider />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Product;
