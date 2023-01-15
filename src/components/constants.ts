type pageInfo = {
  name: string;
  url: string;
};

const pages: pageInfo[] = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/#about' },
  { name: 'FAQ', url: '/faq' },
  { name: 'Contact', url: '/contact' },
];

export { pages };
