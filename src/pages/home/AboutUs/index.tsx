import Section from '@/src/components/atoms/Section';
import { Avatar, Box, Grid, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Section title="About Us">
      <Box display="flex" justifyContent="center">
        <Grid
          container
          columnSpacing={{ xs: 0, sm: 2 }}
          maxWidth="md"
          marginY={3}
          justifyContent="center"
        >
          <Grid item xs={8} sm={5} mb={3}>
            <Avatar
              alt="Lisa"
              src="/img/lisa.jpg"
              variant="rounded"
              sx={{
                width: '100%',
                height: 'auto',
                marginX: 'auto',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={7} display="flex" alignItems="center">
            <Box textAlign="left" mx={2}>
              <Typography marginBottom={2} variant="body1">
                Lisa Choi
              </Typography>
              <ul>
                <li>Lash artist + founder of SundayBeauty since 2019</li>
                <li>- 3x lash certification</li>
                <li>
                  - Bachelor of Environments (Property) – University of
                  Melbourne, Australia
                </li>
              </ul>
              <Typography marginBottom={2} variant="body1">
                Lisa has been passionate about beauty products & industry since
                she was a high school student. She was first introduced to
                stick-on false lashes when she was a university student. To her
                astonishment, she was amazed by how lashes can dramatically
                elevate a person's attractiveness. Ever since then she started
                getting lash extension services but none of the lash studios is
                up to standards- be it hygiene, products used and lash
                retention.
              </Typography>
              <Typography marginBottom={2} variant="body1">
                This has inspired her to create SundayBeauty, aiming to provide
                the best possible service in the market.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};

export default AboutUs;
