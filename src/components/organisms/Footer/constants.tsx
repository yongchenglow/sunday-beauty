import React, { ReactElement } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type LinkInformation = {
  id: string;
  url: string;
  icon: ReactElement;
  text: string;
};

const linkInfos: LinkInformation[] = [
  {
    id: 'whatsapp',
    url: 'https://wa.me/6590784506',
    icon: <WhatsAppIcon />,
    text: '(+65) 9078 4506',
  },
  {
    id: 'email',
    url: 'mailto:sundaybeautysg@gmail.com?subject=Appointment',
    icon: <EmailIcon />,
    text: 'sundaybeautysg@gmail.com',
  },
  {
    id: 'address',
    url: 'https://goo.gl/maps/9v4pm33ZiTD3Hpvt9',
    icon: <LocationOnIcon />,
    text: '220 Orchard Road #04-04C Midpoint Orchard Singapore 238852',
  },
  {
    id: 'instagram',
    url: 'https://www.instagram.com/sundaybeauty.sg/',
    icon: <InstagramIcon />,
    text: '@sundaybeauty.sg',
  },
];

const contactInfos = linkInfos.filter((info) => info.id !== 'instagram');

export { linkInfos, contactInfos };
