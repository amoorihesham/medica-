'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Card } from 'antd';
import { Box, Typography, Divider } from '@mui/material';
import {
  AddShoppingCartOutlined,
  FavoriteBorderOutlined,
  VisibilityOffOutlined,
} from '@mui/icons-material';
import productImg from '@/assets/product/product.png';
import './style.css';

const ProductCard = ({ product, user }) => {
  return (
    <Card
      style={{
        minWidth: '234px',
        position: 'relative',
        boxShadow: '5px 0px 10px 0px #00000024',
      }}
    >
      {product.discount?.hasDiscount && (
        <Typography
          sx={{
            color: 'white',
            backgroundColor: 'green',
            padding: '8px 10px',
            position: 'absolute',
            top: '0',
            left: '0',
            width: 'fit-content',
            fontSize: '14px',
            borderRaduis: '20px',
          }}
        >
          10% Discount
        </Typography>
      )}

      <Flex justify='space-between'>
        <Image
          src={productImg}
          alt='Product Image'
          width={100}
          height={200}
        />

        <FavoriteBorderOutlined />
      </Flex>
      <Divider />
      <Box sx={{ margin: '1rem 0' }}>
        <Link href={`/products/${product.id}`}>
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
            Price: {user ? '500' : <VisibilityOffOutlined />}
          </Typography>
          <AddShoppingCartOutlined />
        </Flex>
      </Box>
    </Card>
  );
};

export default ProductCard;
