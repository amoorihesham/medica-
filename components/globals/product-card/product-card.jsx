'use client';
import Image from 'next/image';
import { Flex, Card } from 'antd';
import { Box, Typography } from '@mui/material';
import {
  AddShoppingCartOutlined,
  FavoriteBorderOutlined,
  VisibilityOffOutlined,
} from '@mui/icons-material';
import productImg from '@/assets/product/product.png';
import './style.css';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: '237px', height: '234px' }}>
      <Flex justify='space-between'>
        <Image
          src={productImg}
          alt='Product Image'
          width={100}
          height={200}
        />
        <FavoriteBorderOutlined />
      </Flex>
      <Box sx={{ margin: '1rem 0' }}>
        <Link href={`/product/${product.id}`}>
          <Typography
            sx={{
              color: '#363839',
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '34px',
              letterSpacing: '1px',
            }}
          >
            {product.title.toUpperCase()}
          </Typography>
        </Link>
        <Flex
          justify='space-between'
          align='center'
          style={{ margin: '1rem 0' }}
        >
          <Typography sx={{ color: '#595D5F', fontWeight: '300', fontSize: '16px' }}>
            Price: <VisibilityOffOutlined />
          </Typography>
          <AddShoppingCartOutlined />
        </Flex>
      </Box>
    </Card>
  );
};

export default ProductCard;
