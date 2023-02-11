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
                At Sunday Beauty, I am dedicated to provide you with the highest
                quality lash extensions and eye-enhancing services. We only the
                best products to ensure that each set of lashes lasts long and
                looks stunning.
              </Typography>
              <Typography marginBottom={2} variant="body1">
                From natural and subtle looks to bold and dramatic styles, we
                have something for everyone. Our salon is designed to be a
                relaxing and welcoming environment, where you can sit back,
                unwind and let us take care of all your lash needs.
              </Typography>
              <Typography marginBottom={2} variant="body1">
                We believe that every woman deserves to feel confident and
                beautiful, and that's why we make it our mission to give you the
                lashes of your dreams. With our commitment to excellence,
                attention to detail, and personalized approach, you can trust
                that your experience at Sunday Beauty will be unforgettable.
              </Typography>
              <Typography marginBottom={2} variant="body1">
                Book your appointment with us today and see the difference for
                yourself!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};

export default AboutUs;
