import Image from 'next/image';
import { Flex, Card } from 'antd';
import { Box, Typography } from '@mui/material';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import productImg from '@/assets/product/product.png';

const ProductCard = () => {
  return (
    <Card style={{ width: '200px' }}>
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
        <Typography>Title</Typography>
        <Typography>Description</Typography>
      </Box>
    </Card>
  );
};

export default ProductCard;
