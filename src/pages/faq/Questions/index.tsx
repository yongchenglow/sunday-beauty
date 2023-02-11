import { Box, Typography, useTheme } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Section from '@/src/components/atoms/Section';
import { faqs } from '@/src/components/constants';
import { useIntl } from 'react-intl';

const Questions = () => {
  const intl = useIntl();
  const theme = useTheme();
  return (
    <Section py={0}>
      <Box display="flex" justifyContent="center">
        <Box maxWidth="md">
          {faqs.map((faq) => (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{ fontWeight: theme.typography.fontWeightMedium }}
                >
                  {intl.formatMessage(faq.question)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{intl.formatMessage(faq.answer)}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Section>
  );
};

export default Questions;
