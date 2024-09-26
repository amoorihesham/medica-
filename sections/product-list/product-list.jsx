import { cookies } from 'next/headers';
import { ProductCard, SectionHeading } from '@/components';
import { Container, Grid2 } from '@mui/material';

const ProductList = ({ productList, title }) => {
  const cookiesStore = cookies();
  const user = JSON.parse(cookiesStore.get('user')?.value) || null;

  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '3rem' }}
    >
      <SectionHeading title={title} />
      <Grid2
        container
        sx={{
          marginTop: '1rem',
        }}
        spacing={2}
        justifyContent='space-between'
      >
        {productList?.map((product) => (
          <Grid2
            key={product.id}
            xs={12}
            md={4}
            lg={2}
          >
            <ProductCard
              product={product}
              user={user}
            />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default ProductList;
