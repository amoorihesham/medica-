import { ProductCard } from '@/components';
import { Container, Grid2, Typography } from '@mui/material';

const ProductList = ({ title, productList }) => {
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '2rem' }}
    >
      <Typography
        variant='h4'
        component='h1'
        sx={{ margin: '1rem 0', color: '#164B60', fontSize: '40px', fontWeight: '500' }}
      >
        {title}
      </Typography>
      <Grid2
        container
        justifyContent='space-between'
        rowSpacing={5}
      >
        {productList?.map((product) => (
          <Grid2
            size={{ xs: 12, md: 4, lg: 2 }}
            key={product.id}
          >
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default ProductList;
