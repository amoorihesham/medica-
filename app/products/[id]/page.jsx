import Image from 'next/image';
import { ProductList } from '@/sections';
import { CategoriesNavbar } from '@/components';
import { Button, Flex } from 'antd';
import { Box, Container, Typography, Divider } from '@mui/material';
import { Add, FavoriteOutlined } from '@mui/icons-material';
import { colors } from '@/styles';
import productImage from '@/assets/product/OIP.png';
const productsList = [
  {
    id: 1,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 2,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 3,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 4,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: true, value: '70' },
  },
  {
    id: 5,
    title: 'Paracetamole',
    description: 'lorem ipsum dolor sit ',
    price: 50,
    discount: { hasDiscount: false, value: '70' },
  },
];

const Product = ({ params }) => {
  return (
    <Box>
      <CategoriesNavbar />
      <Container
        maxWidth='xl'
        sx={{ marginTop: '2rem' }}
      >
        <Flex
          gap={100}
          justify='center'
        >
          <Box sx={{ display: 'flex' }}>
            <Image
              src={productImage}
              alt='Product'
              width={350}
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
              <Typography sx={{ fontSize: '26px', fontWeight: '700', color: colors.primary }}>
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginTop: '1rem' }}>
              <Button icon={<Add />}></Button>
              <Typography>1</Typography>
              <Button icon={<Add />}></Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant='contained'
                style={{
                  backgroundColor: colors.primary,
                  color: colors.primaryText,
                  width: '300px',
                  margin: '2rem auto',
                }}
              >
                Add To Cart
              </Button>
            </Box>
          </Box>
        </Flex>
        <ProductList
          title='Similar To Active Ingrediants'
          productList={productsList}
        />
        <ProductList
          title='Explore More'
          productList={productsList}
        />
      </Container>
    </Box>
  );
};

export default Product;
