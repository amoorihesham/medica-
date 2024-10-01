import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import { Flex } from 'antd';
import { LogoNav } from '..';
import visa from '@/assets/branding/visa.png';
import mastercard from '@/assets/branding/mastercard.svg';
import appstore from '@/assets/branding/appstore.png';
import googlestore from '@/assets/branding/googlestore.png';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{ backgroundColor: '#164B60', paddingY: '2rem', marginTop: '2rem' }}
    >
      <Container maxWidth='xl'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: {
              md: 'space-between',
            },
            alignItems: {
              xs: 'center',
            },
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            rowGap: '1rem',
          }}
        >
          <Box
            sx={{
              textAlign: { xs: 'center' },
            }}
          >
            <LogoNav />
            <ul className='mt-3'>
              <li>
                <Link
                  href='/'
                  className='text-white hover:text-white hover:underline'
                >
                  <Typography
                    variant='body2'
                    sx={{ fontSize: '18px', fontWeight: '500' }}
                  >
                    About Us
                  </Typography>
                </Link>
              </li>
              <li className='mt-1'>
                <Link
                  href='/'
                  className='text-white hover:text-white hover:underline'
                >
                  <Typography
                    variant='body2'
                    sx={{ fontSize: '18px', fontWeight: '500' }}
                  >
                    Our Team
                  </Typography>
                </Link>
              </li>
              <li className='mt-1'>
                <Link
                  href='/'
                  className='text-white hover:text-white hover:underline'
                >
                  <Typography
                    variant='body2'
                    sx={{ fontSize: '18px', fontWeight: '500' }}
                  >
                    Careers
                  </Typography>
                </Link>
              </li>
            </ul>
          </Box>
          <Box
            sx={{
              textAlign: { xs: 'center' },
            }}
          >
            <Typography
              variant='h5'
              sx={{ fontSize: '26px', fontWeight: '700', color: 'white' }}
            >
              Contact Us
            </Typography>
            <ul className='mt-3'>
              <li>
                <Link
                  href='/'
                  className='text-white hover:text-white hover:underline'
                >
                  <Typography
                    variant='body2'
                    sx={{ fontSize: '18px', fontWeight: '500' }}
                  >
                    Call Us
                  </Typography>
                </Link>
              </li>
              <li className='mt-3'>
                <Link
                  href='/'
                  className='text-white hover:text-white hover:underline'
                >
                  <Typography
                    variant='body2'
                    sx={{ fontSize: '18px', fontWeight: '500' }}
                  >
                    WhatsApp
                  </Typography>
                </Link>
              </li>
            </ul>
          </Box>
          <Box
            sx={{
              textAlign: { xs: 'center' },
            }}
          >
            <Typography
              variant='h5'
              sx={{ fontSize: '26px', fontWeight: '700', color: 'white' }}
            >
              Pay With
            </Typography>
            <Flex justify='center'>
              <Image
                src={visa}
                alt='Visa Logo'
                width={60}
                height={60}
              />
              <Image
                src={mastercard}
                alt='Visa Logo'
                width={60}
                height={60}
              />
            </Flex>
          </Box>
          <Box
            sx={{
              textAlign: { xs: 'center' },
            }}
          >
            <Typography
              variant='h5'
              sx={{ fontSize: '26px', fontWeight: '700', color: 'white' }}
            >
              Need Help?
            </Typography>
            <ul className='mt-3'>
              <li>
                <Link
                  href='/'
                  className='text-white hover:text-white hover:underline'
                >
                  <Typography
                    variant='body2'
                    sx={{ fontSize: '18px', fontWeight: '500' }}
                  >
                    Medical Library
                  </Typography>
                </Link>
              </li>
              <li className='mt-3'>
                <Link
                  href='/'
                  className='text-white hover:text-white hover:underline'
                >
                  <Typography
                    variant='body2'
                    sx={{ fontSize: '18px', fontWeight: '500' }}
                  >
                    Terms Of Use
                  </Typography>
                </Link>
              </li>
              <li className='mt-3'>
                <Link
                  href='/'
                  className='text-white hover:text-white hover:underline'
                >
                  <Typography
                    variant='body2'
                    sx={{ fontSize: '18px', fontWeight: '500' }}
                  >
                    privacy Policy
                  </Typography>
                </Link>
              </li>
            </ul>
          </Box>

          <Box>
            <Image
              src={appstore}
              alt='Visa Logo'
              width={130}
              height={52}
            />
            <Image
              src={googlestore}
              alt='Visa Logo'
              width={130}
              height={52}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
