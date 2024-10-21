import Image from 'next/image';
import { Box } from '@mui/material';
import { Carousel } from 'antd';
const Slider = ({ banners }) => {
  return (
    <Box>
      <Carousel
        autoplay
        draggable
        fade
        infinite
        speed={1500}
        style={{ overflow: 'hidden', borderRadius: '.3rem' }}>
        {banners?.map((banner) => (
          <div key={banner.id}>
            <Image
              src={banner.image}
              alt='Banner'
              width={1465}
              height={361}
              style={{ borderRadius: 24, margin: 'auto' }}
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slider;
