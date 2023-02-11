import Section from '@/src/components/atoms/Section';
import Script from 'next/script';

const GoogleReviews = () => {
  return (
    <Section title="Reviews">
      <Script src="https://apps.elfsight.com/p/platform.js" defer></Script>
      <div className="elfsight-app-b25d79a4-52d6-4417-94c6-988fdddac5dd"></div>
    </Section>
  );
};

export default GoogleReviews;
