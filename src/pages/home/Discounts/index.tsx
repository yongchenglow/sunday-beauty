import { discounts } from '@/src/components/constants';
import { cinzel } from '@/src/font';
import { Box, Typography, useTheme } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';

const Discounts = () => {
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
            maxWidth: theme.spacing(85),
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
            <FormattedMessage id="price.list" defaultMessage="Discounts" />
          </Typography>

          {discounts.map((discount) => (
            <Typography
              variant="h5"
              sx={{
                fontFamily: cinzel.style.fontFamily,
                textAlign: 'center',
                fontWeight: theme.typography.fontWeightRegular,
                marginBottom: theme.spacing(3),
              }}
            >
              {intl.formatMessage(discount)}
            </Typography>
          ))}

          <Box display="flex" justifyContent="center" mt={1}>
            <Typography variant="caption">
              *The owner retains the final decision-making authority
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Discounts;
