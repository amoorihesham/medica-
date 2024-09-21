import Image from 'next/image';
import { Container } from '@mui/material';
import { Carousel } from 'antd';
import banner from '@/assets/banners/banner.png';

const Slider = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: '2rem' }}
    >
      <Carousel
        autoplay
        draggable
        fade
        infinite
        speed={1500}
        style={{ overflow: 'hidden', borderRadius: '1rem' }}
      >
        <div>
          <Image
            src={banner}
            alt='Banner'
            width={1381}
            height={361}
          />
        </div>
        <div>
          <Image
            src={banner}
            alt='Banner'
            width={1381}
            height={361}
          />
        </div>
        <div>
          <Image
            src={banner}
            alt='Banner'
            width={1381}
            height={361}
          />
        </div>
        <div>
          <Image
            src={banner}
            alt='Banner'
            width={1381}
            height={361}
          />
        </div>
      </Carousel>
    </Container>
  );
};

export default Slider;
