import { defineMessages, MessageDescriptor } from 'react-intl';

type pageInfo = {
  name: MessageDescriptor;
  url: string;
};

const pages: pageInfo[] = [
  {
    name: { id: 'home', defaultMessage: 'Home' },
    url: '/',
  },
  {
    name: { id: 'about', defaultMessage: 'About' },
    url: '/#about',
  },
  { name: { id: 'faq', defaultMessage: 'FAQ' }, url: '/faq' },
  {
    name: { id: 'contact', defaultMessage: 'Contact' },
    url: '/contact',
  },
];

const validationErrorMessages = defineMessages({
  fieldRequired: {
    id: 'this.field.is.required',
    defaultMessage: 'This field is required',
  },
});

export { pages, validationErrorMessages };
