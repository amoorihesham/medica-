import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography, Divider, Button } from '@mui/material';
import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import productImg from '@/assets/product/product.png';
import { colors } from '@/styles';

const ProductCard = ({ product, user }) => {
  return (
    <Box
      component='div'
      className=' bg-white  border border-gray-100 relative rounded-md pb-2 shadow-md hover:scale-105 transition-all duration-500'
    >
      <Typography
        component='p'
        className='absolute bg-green-500 px-2 py-1 text-xs text-white font-bold rounded-sm top-0 left-0'
      >
        10% Discount
      </Typography>
      <Box
        component='div'
        className='card-heading flex justify-between pt-2 px-2'
      >
        <Link href='/products/5'>
          <Image
            src={productImg}
            alt='asdadad'
            className='w-50'
          />
        </Link>

        <Box>
          <FavoriteBorderOutlined />
        </Box>
      </Box>
      <Divider
        component='hr'
        sx={{ marginBlock: '.5rem', borderColor: colors.gray }}
      />
      <Box
        component='div'
        className='card-body  px-2'
      >
        <Link href='/products/5'>
          <Typography
            component='h5'
            className='text-xl uppercase '
          >
            Title
          </Typography>
        </Link>
        <Box
          component='div'
          className='product-details flex justify-between items-center mt-1'
        >
          <Typography
            component='p'
            className='font-bold text-gray-500'
          >
            Price: 88EGP
          </Typography>
          <Button
            variant='link'
            className=' hover:text-mBlue justify-end p-0'
          >
            <ShoppingCartOutlined sx={{ fontSize: '24px', padding: '0' }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
