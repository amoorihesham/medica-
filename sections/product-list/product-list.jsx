import { ProductCard } from '@/components';
import { Container } from '@mui/material';
import { Col, Row, Grid } from 'antd';

const ProductList = () => {
  return (
    <Container maxWidth='xl'>
      <Row
        justify='space-between'
        gutter={5}
      >
        <Col span={3}>
          <ProductCard />
        </Col>
        <Col span={3}>
          <ProductCard />
        </Col>
        <Col span={3}>
          <ProductCard />
        </Col>
        <Col span={3}>
          <ProductCard />
        </Col>
        <Col span={3}>
          <ProductCard />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
