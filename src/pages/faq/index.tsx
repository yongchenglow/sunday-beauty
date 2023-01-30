import Section from '@/src/components/atoms/Section';
import StandardLayout from '@/src/pages/layouts/standard';
import { Box, Typography, useTheme } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Index = () => {
  const theme = useTheme();
  return (
    <StandardLayout>
      <Section>
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', marginBottom: theme.spacing(2) }}
        >
          <FormattedMessage id="faq" defaultMessage="FAQ" />
        </Typography>
        <Box>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Question 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Question 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Question 3</Typography>
            </AccordionSummary>
          </Accordion>
        </Box>
      </Section>
    </StandardLayout>
  );
};

export default Index;
