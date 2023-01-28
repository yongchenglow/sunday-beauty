import React, { ReactElement } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type LinkInformation = {
  url: string;
  icon: ReactElement<any, any>;
  text: string;
};

const linkInfos: LinkInformation[] = [
  {
    url: 'https://wa.me/6590784506',
    icon: <WhatsAppIcon />,
    text: '(+65) 9078 4506',
  },
  {
    url: 'mailto:sundaybeautysg@gmail.com?subject=Appointment',
    icon: <EmailIcon />,
    text: 'sundaybeautysg@gmail.com',
  },
  {
    url: 'https://goo.gl/maps/kCRAJb7PjF4s95YZ8',
    icon: <LocationOnIcon />,
    text: 'Canberra Drive, Singapore 268101',
  },
  {
    url: 'https://www.instagram.com/sundaybeauty.sg/',
    icon: <InstagramIcon />,
    text: '@sundaybeauty.sg',
  },
];

export { linkInfos };
