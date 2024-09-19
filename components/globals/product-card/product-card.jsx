import Image from 'next/image';
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import { HeartOutlined0000000000000000 } from '@/mui/icons-material';
import productImg from '@/assets/product/product.png';
const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia>
          <Image
            src={productImg}
            width={74}
            height={92}
            alt='Product Image'
          />
          <HeartOutlined />
        </CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
          >
            Lizard
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: 'text.secondary' }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size='small'
          color='primary'
        >
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
