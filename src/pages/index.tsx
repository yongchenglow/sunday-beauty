import StandardLayout from '@/src/components/template/standard';
import Banner from '@/src/components/molecules/Banner';
import AboutUs from './home/AboutUs';
import PriceList from './home/PriceList';
import Portfolio from './home/Portfolio';
import Discounts from './home/Discounts';
import Instagram from './home/Instagram';
import GoogleReviews from './home/GoogleReviews';

const Index = () => {
  return (
    <StandardLayout>
      <Banner title="Sunday Beauty" imageUrl="/img/lash_close_up.jpg" />
      <AboutUs />
      <Portfolio />
      <Instagram />
      <PriceList />
      <Discounts />
      <GoogleReviews />
    </StandardLayout>
  );
};

export default Index;
