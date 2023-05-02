import { items } from '@/src/components/constants';
import { cinzel } from '@/src/font';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';

const PriceList = () => {
  const intl = useIntl();
  const theme = useTheme();
  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.light,
      }}
    >
      <Box display="flex" justifyContent="center">
        <Box
          sx={{
            maxWidth: theme.spacing(60),
            padding: theme.spacing(5, 4),
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: cinzel.style.fontFamily,
              textAlign: 'center',
              marginBottom: theme.spacing(3),
            }}
          >
            <FormattedMessage id="price.list" defaultMessage="Price List" />
          </Typography>

          {items.map((item) => (
            <Grid
              container
              my={3}
              width={{ sm: '100%', md: theme.spacing(65) }}
              key={item.name.id}
            >
              <Grid item xs={7}>
                <Typography
                  sx={{
                    fontFamily: cinzel.style.fontFamily,
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
                      fontFamily: cinzel.style.fontFamily,
                      lineHeight: 1,
                    }}
                  >
                    {intl.formatMessage(item.description)}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={5} textAlign="center">
                {item.price && (
                  <Typography
                    sx={{
                      fontFamily: cinzel.style.fontFamily,
                      fontSize: theme.typography.h5.fontSize,
                    }}
                  >
                    {item.price}
                  </Typography>
                )}
                {item.priceDescription && (
                  <Typography
                    sx={{
                      fontFamily: cinzel.style.fontFamily,
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
          <Box display="flex" justifyContent="center" mt={1}>
            <Typography variant="caption">
              *Prices are subjected to surcharge during festive seasons
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceList;
