import { FunctionComponent } from 'react';
import styles from '@/src/pages/contact/map/map.module.css';
import { Box } from '@mui/material';

const ContactLocation: FunctionComponent = () => {
  return (
    <Box>
      <div className={styles.mapouter}>
        <div className={styles.gmap_canvas}>
          <iframe
            width="500"
            height="350"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.560786974462!2d103.82781521475414!3d1.438574098950845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da147d9b74068f%3A0xd418c46064de92ad!2s21%20Canberra%20Dr%2C%20Singapore%20768076!5e0!3m2!1sen!2ssg!4v1676650199927!5m2!1sen!2ssg"
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
    </Box>
  );
};

export default ContactLocation;
