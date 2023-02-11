import StandardLayout from '@/src/components/template/standard';
import Banner from '@/src/components/molecules/Banner';
import AboutUs from './home/AboutUs';
import PriceList from './home/PriceList';
// import Portfolio from './home/Portfolio';
// import { Reviews } from '@mui/icons-material';

const Index = () => {
  return (
    <StandardLayout>
      <Banner
        title="Sunday Beauty"
        imageUrl="/img/snow_lash.jpg"
        subTitle="Guaranteed lash retention & satisfaction"
      />
      <AboutUs />
      {/* <Portfolio /> */}

      <PriceList />

      {/* <Reviews /> */}
    </StandardLayout>
  );
};

export default Index;
