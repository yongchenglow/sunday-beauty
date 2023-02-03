import Section from '@/src/components/atoms/Section';
import StandardLayout from '@/src/pages/layouts/standard';
import { Typography, useTheme } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import ContactForm from '@/src/pages/contact/form';
import ContactLocation from '@/src/pages/contact/map';

const Index = () => {
  const theme = useTheme();
  const handleSubmit = () => {
    return true;
  };
  return (
    <StandardLayout>
      <Section>
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', marginBottom: theme.spacing(2) }}
        >
          <FormattedMessage id="contact.us" defaultMessage="Contact Us" />
        </Typography>
        <ContactForm onSubmit={handleSubmit} />
        <ContactLocation />
      </Section>
    </StandardLayout>
  );
};

export default Index;
