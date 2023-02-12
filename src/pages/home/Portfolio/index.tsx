import Section from '@/src/components/atoms/Section';
import { portfolioImageURLs } from '@/src/components/constants';
import useWindowDimensions from '@/src/hooks/use-window-dimention';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { chunk, uniqueId } from 'lodash';

const Portfolio = () => {
  const { width } = useWindowDimensions();
  const sliceValue = width <= 600 ? 1 : width <= 900 ? 2 : 3;
  const carousel = chunk(portfolioImageURLs, sliceValue);
  return (
    <Section title="Portfolio">
      <Carousel
        autoPlay
        interval={6000}
        animation="slide"
        navButtonsAlwaysVisible={true}
      >
        {carousel.map((images) => {
          const slide = images.map((image) => (
            <Box maxHeight="300px" key={image}>
              <img src={image} style={{ height: '300px', width: 'auto' }} />
            </Box>
          ));
          return (
            <Box
              display="flex"
              justifyContent="space-evenly"
              key={uniqueId('slide-')}
            >
              {slide}
            </Box>
          );
        })}
      </Carousel>
    </Section>
  );
};

export default Portfolio;
