'use client';
import Image from 'next/image';
import { Button } from 'antd';
import { Box, Container, Typography, Divider } from '@mui/material';
import { Add, FavoriteOutlined } from '@mui/icons-material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { ProductList } from '@/sections';
import { SeeMoreBtn } from '@/components';
import { colors } from '@/styles';
import StateProvider from '@/components/Provider';
import { getProduct, getSingleProduct } from '@/utils/productFunc';
import Selector from '@/components/select/Selector';
import { useEffect, useState } from 'react';
const DynamicPage = ({params}) => {
    console.log("params",params);
    const [select, setSelect] = useState(null);
    const [product, setproduct] = useState(null);
    const [vendor, setVendor] = useState(null);
    const [productsList, setproductsList] = useState(null);
    const user = null; // JSON.parse(cookiesStore.get('user')?.value) || null;
    //const productsList = await getProduct({allItems:1})
    useEffect(() => {
      const fetData = async () => {
        const product = await getSingleProduct({ id: params.id, allItems: 1 });
        setproduct(product);
        setSelect(product.vendors[0]);
        setVendor(product.vendors[0]);
        const products = await getProduct({ vendor_id: product.vendors[0]?.vendor_id });
        setproductsList(products);
      };
      fetData();
    }, []);
    const press = async (obj) => {
      setVendor(obj);
      setSelect(obj);
      const products = await getProduct({ vendor_id: obj?.vendor_id });
      setproductsList(products);
    };
    return (
      <Box>
        <Container
          maxWidth='xl'
          sx={{ marginTop: '2rem' }}>
          <Box
            component='div'
            className='flex justify-between gap-5  items-center '>
            <Box
              component='div'
              className='flex  flex-grow '>
              <Image
                src={product?.image}
                alt='Product'
                width={350}
                height={519}
              />
              <FavoriteOutlined />
            </Box>
  
            <Box
              component='div'
              className='flex-grow pr-20'>
              <Selector
                vendors={product?.vendors}
                press={press}
                select={select}
              />
              <Typography
                variant='h2'
                component='h1'
                sx={{ fontSize: '30px', fontWeight: '700' }}>
                {product?.name}
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
                  marginBottom: '1rem',
                }}>
                Sold by
                <Typography
                  sx={{ color: '#5FF529', fontweight: '700' }}
                  component='span'>
                  {vendor?.code}
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
                  marginBottom: '1rem',
                }}>
                Medicin
              </Typography>
              <Box
                component='div'
                className='flex justify-between items-center max-w-96'>
                <Typography sx={{ fontSize: '16px', fontWeight: '700', color: colors.primary }}>
                  EGP {vendor?.price}
                </Typography>
                {/* <Typography
                  sx={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#595D5F',
                  }}
                  className=' line-through'
                >
                  EGP 900
                </Typography> */}
                <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#F48C15' }}>
                  {vendor?.discount}% Discount
                </Typography>
              </Box>
              <Divider sx={{ marginBlock: '2rem' }} />
  
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '.5rem',
                  marginTop: '1rem',
                }}>
                <Button icon={<HorizontalRuleIcon />}></Button>
                <Typography>1</Typography>
                <Button icon={<Add />}></Button>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant='contained'
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.primaryText,
                    width: '100%',
                    height: '44px',
                    margin: '2rem auto',
                    marginLeft: '0',
                  }}>
                  Add To Cart
                </Button>
              </Box>
            </Box>
          </Box>
          <StateProvider>
            <ProductList
              title='Similar From Same Vendor'
              productList={productsList}
            />
          </StateProvider>
          {/* <StateProvider>
          <ProductList
            title='Explore More'
            productList={productsList}
          />
          </StateProvider> */}
          <SeeMoreBtn url='/products' />
        </Container>
      </Box>
    );
}

export default DynamicPage