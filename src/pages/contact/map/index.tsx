import { FunctionComponent } from 'react';
import styles from '@/src/pages/contact/map/map.module.css';

const ContactLocation: FunctionComponent = () => {
  return (
    <div className={styles.mapouter}>
      <div className={styles.gmap_canvas}>
        <iframe
          width="300"
          height="400"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=1%20canberra&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        ></iframe>
        <a href="https://fmovies-online.net"></a>
        <br />
        <a href="https://www.embedgooglemap.net">google map in website</a>
      </div>
    </div>
  );
};

export default ContactLocation;
