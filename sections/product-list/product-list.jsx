import { ProductCard, SectionHeading } from '@/components';
import { Container, Grid2 } from '@mui/material';

const ProductList = ({ productList, title }) => {
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '3rem' }}
    >
      <SectionHeading title={title} />
      <Grid2
        container
        sx={{ marginTop: '1rem' }}
        spacing={2}
        siz={{ xs: 12, md: 4, lg: 2 }}
      >
        {productList?.map((product) => (
          <Grid2 key={product.id}>
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default ProductList;
