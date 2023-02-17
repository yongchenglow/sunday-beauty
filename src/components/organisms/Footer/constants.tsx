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
    url: 'https://goo.gl/maps/X8zDmQHT21c2viFs6',
    icon: <LocationOnIcon />,
    text: '21 Canberra Drive, Singapore 768076',
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
