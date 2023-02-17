import StandardLayout from '@/src/components/template/standard';
import Banner from '@/src/components/molecules/Banner';
import Questions from './Questions';

const Index = () => {
  return (
    <StandardLayout>
      <Banner
        title="Frequently Asked Questions"
        imageUrl="/img/lash_close_up.jpg"
        height={500}
      />
      <Questions />
    </StandardLayout>
  );
};

export default Index;
