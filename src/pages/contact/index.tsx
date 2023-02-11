import StandardLayout from '@/src/components/template/standard';
import { Box, Grid, Paper, Typography, useTheme } from '@mui/material';
import ContactForm from '@/src/pages/contact/form';
import ContactLocation from '@/src/pages/contact/map';
import Section from '@/src/components/atoms/Section';
import Banner from '@/src/components/molecules/Banner';
import { contactInfos } from '@/src/components/organisms/Footer/constants';
import HoverMuiLink from '@/src/components/atoms/HoverMuiLink';

const Index = () => {
  const theme = useTheme();
  return (
    <StandardLayout>
      <Banner
        title="Contact Us"
        imageUrl="/img/contact.jpg"
        height={500}
        backgroundPosition="50% 30%"
      />
      <Section>
        <Grid container spacing={3} justifyContent="center">
          <Grid item md={6}>
            <Box my={5}>
              {contactInfos.map((contactInfo) => (
                <HoverMuiLink
                  href={contactInfo.url}
                  target="_blank"
                  underline="none"
                  color={theme.palette.common.black}
                  my={0.5}
                  sx={{ display: 'block' }}
                  key={contactInfo.text}
                >
                  <Box
                    display="flex"
                    justifyItems="center"
                    justifyContent="center"
                  >
                    {contactInfo.icon}
                    <Typography
                      variant="h6"
                      sx={{ marginLeft: theme.spacing(0.5) }}
                    >
                      {contactInfo.text}
                    </Typography>
                  </Box>
                </HoverMuiLink>
              ))}
            </Box>
            <Box display="flex" justifyContent="center">
              <ContactLocation />
            </Box>
          </Grid>
          <Grid item md={6} textAlign="center">
            <Paper
              elevation={2}
              sx={{ padding: theme.spacing(3), maxWidth: theme.spacing(62.5) }}
            >
              <ContactForm />
            </Paper>
          </Grid>
        </Grid>
      </Section>
    </StandardLayout>
  );
};

export default Index;
