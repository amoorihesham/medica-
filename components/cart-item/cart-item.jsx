'use client';
import Image from 'next/image';
import { Box, Divider, Typography } from '@mui/material';
import { DeleteOutlineIcon } from '@mui/icons-material';
import { Flex, Button } from 'antd';
import productImage from '@/assets/product/OIP.png';
export default function CartItem({ title, price, dTime, sold }) {
  return (
    <Box>
      <Flex>
        <Box>
          <Image
            src={productImage}
            alt='Product Image'
            width={200}
            height={200}
          />
        </Box>
        <Divider />
        <Box>
          <Typography
            variant='h5'
            component='h3'
          >
            {title}
          </Typography>
          <Typography
            variant='h5'
            component='h3'
          >
            {price}
          </Typography>
          <Typography
            variant='h5'
            component='h3'
          >
            {dTime}
          </Typography>
          <Typography
            variant='h5'
            component='h3'
          >
            {sold}
          </Typography>
          <Button icon={<DeleteOutlineIcon />}>Remove</Button>
        </Box>
      </Flex>
    </Box>
  );
}
