'use client';
import Image from 'next/image';
import { Box, Divider, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Flex, Button } from 'antd';
import { colors } from '@/styles';
import productImage from '@/assets/product/OIP.png';
export default function CartItem({ title, price, dTime, sold }) {
  return (
    <Box sx={{ padding: '1rem 0' }}>
      <Flex>
        <Box>
          <Image
            src={productImage}
            alt='Product Image'
            width={250}
            height={250}
          />
        </Box>
        <Divider
          orientation='vertical'
          flexItem
          sx={{ margin: '0 1.7rem 0 0' }}
        />
        <Flex
          justify='space-between'
          align='center'
          style={{ flexGrow: 2 }}
        >
          <Box>
            <Typography
              variant='h5'
              component='h3'
              sx={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '1rem' }}
            >
              Concor 10 mg Lak Tablet | Bisoprolol Fumarat
            </Typography>
            <Typography
              variant='h5'
              component='h3'
              sx={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: colors.primary,
              }}
            >
              EGP 800
            </Typography>
            <Typography
              variant='h5'
              component='h3'
              sx={{
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: colors.gray,
              }}
            >
              Get it by
              <Typography
                component='span'
                sx={{
                  fontWeight: 'bold',
                  marginLeft: '.5rem',
                  color: colors.orange,
                }}
              >
                WED.Sep 16
              </Typography>
            </Typography>
            <Typography
              variant='h5'
              component='h3'
              sx={{
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: colors.gray,
              }}
            >
              Sold by
              <Typography
                component='span'
                sx={{
                  fontWeight: 'bold',
                  marginLeft: '.5rem',
                  color: colors.green,
                }}
              >
                12344521
              </Typography>
            </Typography>

            <Button
              icon={<DeleteOutlineIcon />}
              style={{
                color: colors.primary,
                fontSize: '16px',
                fontWeight: '500',
                marginBottom: '1rem',
              }}
            >
              Remove
            </Button>
          </Box>
          <Flex
            align='center'
            gap={8}
          >
            <Button>+</Button>
            <Typography>1</Typography>
            <Button>-</Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
