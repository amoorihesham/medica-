import Image from 'next/image';
import { Container } from '@mui/material';
import { Carousel } from 'antd';
const Slider = ({ banners }) => {
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
        style={{ overflow: 'hidden', borderRadius: '.3rem' }}
      >
        {banners?.map((banner) => (
          <div key={banner.id}>
            <Image
              src={banner.image}
              alt='Banner'
              width={1381}
              height={361}
              style={{ borderRadius:24 } }
            />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Slider;
