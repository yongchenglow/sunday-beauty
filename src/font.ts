import { Poppins, Cinzel } from '@next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const cinzel = Cinzel({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export { poppins, cinzel };
