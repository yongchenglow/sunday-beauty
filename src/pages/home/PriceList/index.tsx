import Section from '@/src/components/atoms/Section';
import { items } from '@/src/components/constants';
import { Box, Grid, Paper, Typography, useTheme } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';

const PriceList = () => {
  const intl = useIntl();
  const theme = useTheme();
  return (
    <Section>
      <Box display="flex" justifyContent="center">
        <Paper
          sx={{
            maxWidth: theme.spacing(60),
            padding: theme.spacing(5, 4),
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.light,
            borderRadius: theme.spacing(1),
          }}
          elevation={2}
        >
          <Typography
            variant="h3"
            style={{
              textAlign: 'center',
              marginBottom: theme.spacing(3),
            }}
          >
            <FormattedMessage id="price.list" defaultMessage="Price List" />
          </Typography>

          {items.map((item) => (
            <Grid container spacing={3} key={item.name.id}>
              <Grid item xs={7}>
                <Typography
                  sx={{
                    fontSize: theme.typography.h5.fontSize,
                    fontWeight: theme.typography.fontWeightMedium,
                  }}
                >
                  {intl.formatMessage(item.name)}
                </Typography>
                {item.description && (
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1,
                    }}
                  >
                    {intl.formatMessage(item.description)}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={5} textAlign="center">
                {item.price && (
                  <Typography sx={{ fontSize: theme.typography.h5.fontSize }}>
                    {item.price}
                  </Typography>
                )}
                {item.priceDescription && (
                  <Typography
                    sx={{
                      fontSize: theme.typography.h6.fontSize,
                      lineHeight: '1.2',
                    }}
                  >
                    {intl.formatMessage(item.priceDescription)}
                  </Typography>
                )}
              </Grid>
            </Grid>
          ))}
          <Box display="flex" justifyContent="center" mt={1}>
            <img
              src="img/sunday_beauty_logo_square.png"
              alt="Sunday Beauty"
              style={{ height: 'auto', maxWidth: theme.spacing(18) }}
            />
          </Box>
        </Paper>
      </Box>
    </Section>
  );
};

export default PriceList;
