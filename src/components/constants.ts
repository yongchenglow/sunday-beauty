import { defineMessages, MessageDescriptor } from 'react-intl';

type PageInfo = {
  name: MessageDescriptor;
  url: string;
};

const pages: PageInfo[] = [
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

type Item = {
  name: MessageDescriptor;
  price?: string;
  priceDescription?: MessageDescriptor;
  description?: MessageDescriptor;
};

const items: Item[] = [
  {
    name: { id: 'classic', defaultMessage: 'Classic' },
    price: '75',
  },
  {
    name: { id: 'soft.volume', defaultMessage: 'Soft Volume' },
    price: '95',
  },
  {
    name: { id: 'volume', defaultMessage: 'Volume' },
    price: '115',
  },
  {
    name: { id: 'refill', defaultMessage: 'Refill' },
    priceDescription: {
      id: '50.of.original.price',
      defaultMessage: '50% of original price',
    },
  },
  {
    name: { id: 'upward.lash', defaultMessage: 'Upward Lash' },
    price: '10',
  },
  {
    name: { id: 'removal', defaultMessage: 'Removal' },
    description: {
      id: 'free.removal.for.returning.customers',
      defaultMessage: 'Free removal for returning customers',
    },
    price: '10/20',
  },
  {
    name: { id: 'lash.cleanser', defaultMessage: 'Lash Cleanser' },
    description: {
      id: 'comes.with.lash.brush',
      defaultMessage: 'Comes with lash brush',
    },
    price: '35',
  },
];

type FAQ = {
  question: MessageDescriptor;
  answer: MessageDescriptor[];
};

const faqs: FAQ[] = [
  {
    question: {
      id: 'question.1',
      defaultMessage: 'What are lash extensions?',
    },
    answer: [
      {
        id: 'answer.1a',
        defaultMessage:
          'They are synthetic fibres which mimic real lashes that come in different length/ weight/curls and they are carefully applied to your natural lash during lash appointment.',
      },
      {
        id: 'answer.1b',
        defaultMessage:
          'It can look natural or voluminous based on your preference and natural lash count. ',
      },
    ],
  },
  {
    question: {
      id: 'question.2',
      defaultMessage: 'Do lash extensions damage natural lashes?',
    },
    answer: [
      {
        id: 'answer.2',
        defaultMessage:
          'We will advise the intensity and lash length of lash extensions based on the client’s lash health and condition so that the lash extensions are not too heavy for the natural lashes to handle. Subsequently, if the application is done correctly with proper isolation, the lashes will not be damaged.',
      },
    ],
  },
  {
    question: {
      id: 'question.3',
      defaultMessage: 'How long do the lash extensions last?',
    },
    answer: [
      {
        id: 'answer.3',
        defaultMessage:
          'Everyone has different lash shedding rate but it will typically last for 4 to 6 weeks with good aftercare. A refill is recommended to be done after 2 to 2.5 weeks after the first session.',
      },
    ],
  },
  {
    question: {
      id: 'question.4',
      defaultMessage:
        'How to take care of the lash extensions/improve lash retention?',
    },
    answer: [
      {
        id: 'answer.4',
        defaultMessage:
          'We cannot stress enough the importance of lash cleansing. Do cleanse the lashes with lash cleanser and brush after the lash appointment twice a day to maintain the hygiene of the lashes. Avoid swimming after the lash appointment too.',
      },
    ],
  },
  {
    question: {
      id: 'question.5',
      defaultMessage: 'How long is usually a lash appointment?',
    },
    answer: [
      {
        id: 'answer.5',
        defaultMessage:
          'It will take 1.5 to 2.5 hours for a lash appointment depending on the lash count of each client.',
      },
    ],
  },
  {
    question: {
      id: 'question.6',
      defaultMessage:
        'Is it advisable to keep doing lash extensions? Will it damage my lashes?',
    },
    answer: [
      {
        id: 'answer.6',
        defaultMessage:
          'As long as the lash extensions are done properly, you can literally get your lashes done for life.',
      },
    ],
  },
  {
    question: {
      id: 'question.7',
      defaultMessage: 'Can I still wear mascara after my lash appointment?',
    },
    answer: [
      {
        id: 'answer.7',
        defaultMessage:
          'It is not advisable to wear mascara for hygiene and safety purpose. ',
      },
    ],
  },
  {
    question: {
      id: 'question.8',
      defaultMessage: 'Do you do lash refill from other salons?',
    },
    answer: [
      {
        id: 'answer.8',
        defaultMessage:
          "Yes, we will do refill from other salons if the lashes are up to our standard. Do send us your photo before your appointment and we'll examine and inform you if a lash removal is required.",
      },
    ],
  },
  {
    question: {
      id: 'question.9',
      defaultMessage: 'Can I swim, shower or exercise with lash extensions?',
    },
    answer: [
      {
        id: 'answer.9',
        defaultMessage:
          'Yes, you can swim, shower and exercise with lash extensions, but it is important to wear goggles when swimming and do cleanse the lashes diligently after swimming and exercising.',
      },
    ],
  },
];

const portfolioImageURLs: string[] = [
  '/img/portfolio1.jpeg',
  '/img/portfolio2.jpeg',
  '/img/portfolio3.jpeg',
  '/img/portfolio4.jpeg',
  '/img/portfolio5.jpeg',
  '/img/portfolio6.jpeg',
  '/img/portfolio7.jpeg',
  '/img/portfolio8.jpeg',
];

export { pages, validationErrorMessages, items, faqs, portfolioImageURLs };
