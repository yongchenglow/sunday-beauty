import Section from '@/src/components/atoms/Section';
import Script from 'next/script';

const Portfolio = () => {
  return (
    <Section title="Portfolio">
      <div
        className="embedsocial-hashtag"
        data-ref="21020ba59827bb2cf4653e6fc0d1056ab45afbe6"
      >
        <a
          className="feed-powered-by-es feed-powered-by-es-feed-new"
          href="https://embedsocial.com/social-media-aggregator/"
          target="_blank"
          title="Widget by EmbedSocial"
        >
          Widget by EmbedSocial<span>→</span>{' '}
        </a>
      </div>
      <Script id="instagram">
        {`(function(d, s, id) { var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js); }(document, "script", "EmbedSocialHashtagScript"));`}
      </Script>
    </Section>
  );
};

export default Portfolio;
