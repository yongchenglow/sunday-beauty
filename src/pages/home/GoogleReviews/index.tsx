import Section from '@/src/components/atoms/Section';
import Script from 'next/script';

const GoogleReviews = () => {
  return (
    <Section title="Reviews">
      <div className="sk-ww-google-reviews" data-embed-id="116842"></div>
      <Script
        src="https://widgets.sociablekit.com/google-reviews/widget.js"
        async
        defer
      ></Script>
    </Section>
  );
};

export default GoogleReviews;
