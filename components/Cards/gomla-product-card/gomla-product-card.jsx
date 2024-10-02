import Image from 'next/image'
import Link from 'next/link'
import { Box, Button, Divider, Typography } from '@mui/material'
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material'
import productImg from '@/assets/product/product.png'

export default function GomlaProductCard() {
  return (
    <Box
      component="div"
      className=" bg-white  border border-gray-100  rounded-md pb-2 shadow-md hover:scale-105 transition-all duration-500"
    >
      <Box
        component="div"
        className="card-heading flex justify-between pt-2 px-2"
      >
        <Link href="gomla/product/5">
          <Image src={productImg} alt="asdadad" className="w-50" />
        </Link>

        <Box>
          <FavoriteBorderOutlined />
        </Box>
      </Box>
      <Divider />
      <Box component="div" className="card-body  px-2">
        <Link href="gomla/product/5">
          <Typography component="h5" className="text-xl uppercase ">
            Title
          </Typography>
        </Link>
        <Box
          component="div"
          className="product-details flex justify-between items-center mt-1"
        >
          <Typography component="p" className="font-bold text-gray-500">
            Price: 88EGP
          </Typography>
          <Button variant="link" className=" hover:text-mBlue justify-end p-0">
            <ShoppingCartOutlined sx={{ fontSize: '24px', padding: '0' }} />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
