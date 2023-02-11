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
  answer: MessageDescriptor;
};

const faqs: FAQ[] = [
  {
    question: {
      id: 'what.are.lash.extensions',
      defaultMessage: 'What are lash extensions?',
    },
    answer: {
      id: 'lash.extensions.are.individual.synthetic.or.natural.hair.fibers.that.are.attached.to.each.of.your.natural.lashes.to.enhance.their.length.and.fullness',
      defaultMessage:
        'Lash extensions are individual synthetic or natural hair fibers that are attached to each of your natural lashes to enhance their length and fullness.',
    },
  },
  {
    question: {
      id: 'how.long.do.lash.extensions.last',
      defaultMessage: 'How long do lash extensions last?',
    },
    answer: {
      id: 'lash.extensions.can.last.anywhere.from.2.8.weeks.depending.on.the.life.cycle.of.your.natural.lashes.and.the.aftercare.routine.',
      defaultMessage:
        'Lash extensions can last anywhere from 2-8 weeks, depending on the life cycle of your natural lashes and the aftercare routine.',
    },
  },
  {
    question: {
      id: 'are.lash.extensions.safe',
      defaultMessage: 'Are lash extensions safe?',
    },
    answer: {
      id: 'when.applied.correctly.by.a.trained.and.experienced.technician.lash.extensions.are.safe.for.your.natural.lashes.its.important.to.choose.a.salon.that.uses.high.quality.products.and.adheres.to.strict.hygiene.standards.',
      defaultMessage:
        "When applied correctly by a trained and experienced technician, lash extensions are safe for your natural lashes. It's important to choose a salon that uses high-quality products and adheres to strict hygiene standards.",
    },
  },
  {
    question: {
      id: 'what.should.i.do.to.prepare.for.my.lash.appointment',
      defaultMessage: 'What should I do to prepare for my lash appointment?',
    },
    answer: {
      id: 'it.is.recommended.to.avoid.using.oils.and.heavy.creams.around.your.eyes.prior.to.the.appointment.and.to.arrive.with.clean.lashes.free.of.any.makeup.',
      defaultMessage:
        'It is recommended to avoid using oils and heavy creams around your eyes prior to the appointment, and to arrive with clean lashes free of any makeup.',
    },
  },
  {
    question: {
      id: 'how.long.does.the.appointment.take',
      defaultMessage: 'How long does the appointment take?',
    },
    answer: {
      id: 'a.full.set.of.lash.extensions.can.take.anywhere.from.1.2.hours.while.a.touch.up.appointment.can.take.around.30.minutes.to.an.hour.',
      defaultMessage:
        'A full set of lash extensions can take anywhere from 1-2 hours, while a touch-up appointment can take around 30 minutes to an hour.',
    },
  },
  {
    question: {
      id: 'can.i.wear.makeup.with.lash.extensions',
      defaultMessage: 'Can I wear makeup with lash extensions?',
    },
    answer: {
      id: 'yes.you.can.wear.makeup.with.lash.extensions.but.it.is.important.to.choose.oil.free.products.and.avoid.rubbing.your.eyes.as.this.can.damage.the.extensions.',
      defaultMessage:
        'Yes, you can wear makeup with lash extensions, but it is important to choose oil-free products and avoid rubbing your eyes, as this can damage the extensions.',
    },
  },
  {
    question: {
      id: 'how.do.i.take.care.of.my.lash.extensions',
      defaultMessage: 'How do I take care of my lash extensions?',
    },
    answer: {
      id: 'avoiding.the.use.of.oil.based.products.keeping.your.lashes.dry.for.the.first.24.hours.after.the.appointment.and.gently.brushing.them.daily.can.help.extend.the.life.of.your.lash.extensions.',
      defaultMessage:
        'Avoiding the use of oil-based products, keeping your lashes dry for the first 24 hours after the appointment, and gently brushing them daily can help extend the life of your lash extensions.',
    },
  },
  {
    question: {
      id: 'can.i.swim.shower.or.exercise.with.lash.extensions',
      defaultMessage: 'Can I swim, shower or exercise with lash extensions?',
    },
    answer: {
      id: 'yes.you.can.swim.shower.and.exercise.with.lash.extensions.but.it.is.important.to.avoid.direct.contact.with.water.for.the.first.24.hours.and.to.be.gentle.when.rubbing.your.eyes.',
      defaultMessage:
        'Yes, you can swim, shower and exercise with lash extensions, but it is important to avoid direct contact with water for the first 24 hours and to be gentle when rubbing your eyes.',
    },
  },
  {
    question: {
      id: 'what.happens.if.i.have.an.allergic.reaction.to.the.adhesive',
      defaultMessage:
        'What happens if I have an allergic reaction to the adhesive?',
    },
    answer: {
      id: 'if.you.experience.an.allergic.reaction.to.the.adhesive.it.is.important.to.seek.medical.attention.and.to.inform.your.technician.your.technician.can.help.you.determine.the.best.course.of.action.and.recommend.alternative.adhesives.if.necessary.',
      defaultMessage:
        'If you experience an allergic reaction to the adhesive, it is important to seek medical attention and to inform your technician. Your technician can help you determine the best course of action and recommend alternative adhesives if necessary.',
    },
  },
];

export { pages, validationErrorMessages, items, faqs };
