import Image from 'next/image';
import { cookies } from 'next/headers';
import { Button } from 'antd';
import { Box, Container, Typography, Divider } from '@mui/material';
import { Add, FavoriteOutlined } from '@mui/icons-material';
import { ProductList } from '@/sections';
import { SeeMoreBtn } from '@/components';
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
  const cookiesStore = cookies();
  const user = null // JSON.parse(cookiesStore.get('user')?.value) || null;
  return (
    <Box>
      <Container
        maxWidth='xl'
        sx={{ marginTop: '2rem' }}
      >
        <Box
          component='div'
          className='flex justify-between gap-5  items-center'
        >
          <Box
            component='div'
            className='flex  flex-grow '
          >
            <Image
              src={productImage}
              alt='Product'
              width={350}
              height={519}
            />
            <FavoriteOutlined />
          </Box>

          <Box
            component='div'
            className='flex-grow'
          >
            <Typography
              variant='h2'
              component='h1'
              sx={{ fontSize: '30px', fontWeight: '700' }}
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
                fontSize: '16px',
                fontWeight: '700',
                margin: '.5rem 0',
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
                fontSize: '14px',
                color: 'white',
                width: 'fit-content',
                padding: '.2rem .5rem',
                borderRadias: '6px',
                margin: '.5rem 0',
              }}
            >
              Medicin
            </Typography>
            <Box
              component='div'
              className='flex justify-between items-center max-w-96'
            >
              <Typography sx={{ fontSize: '16px', fontWeight: '700', color: colors.primary }}>
                EGP 800
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#595D5F',
                }}
                className=' line-through'
              >
                EGP 900
              </Typography>
              <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#F48C15' }}>
                10% Discount
              </Typography>
            </Box>
            <Divider sx={{ marginBlock: '2rem' }} />
            {user && (
              <>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '.5rem',
                    marginTop: '1rem',
                  }}
                >
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
              </>
            )}
          </Box>
        </Box>
        <ProductList
          title='Similar To Active Ingrediants'
          productList={productsList}
        />
        <ProductList
          title='Explore More'
          productList={productsList}
        />
        <SeeMoreBtn url='/products' />
      </Container>
    </Box>
  );
};

export default Product;
