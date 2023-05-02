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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7888562754206!2d103.83449702695313!3d1.301595399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1991315227e5%3A0x41e9474e6c556e97!2sMidpoint%20Orchard!5e0!3m2!1sen!2ssg!4v1683025042755!5m2!1sen!2ssg"
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
