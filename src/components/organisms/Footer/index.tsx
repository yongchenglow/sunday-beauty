import { Box, Container, Grid, useTheme, Typography } from '@mui/material';
import HoverMuiLink from '@/src/components/atoms/HoverMuiLink';
import { linkInfos } from '@/src/components/organisms/Footer/constants';
import { pages } from '@/src/components/constants';
import Link from 'next/link';

const Footer = () => {
  const theme = useTheme();
  return (
    <footer style={{ marginTop: 'auto' }}>
      <Box bgcolor="text.secondary" color="white" p={1} pt={1.5}>
        <Container maxWidth="xl">
          <Grid container textAlign="center">
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: theme.typography.fontWeightBold,
                  marginBottom: theme.spacing(1),
                }}
              >
                Book Now
              </Typography>
              {linkInfos.map((linkInfo) => (
                <HoverMuiLink
                  href={linkInfo.url}
                  target="_blank"
                  underline="none"
                  color="white"
                  my={0.5}
                  sx={{ display: 'block' }}
                  key={linkInfo.text}
                >
                  <Box
                    display="flex"
                    justifyItems="center"
                    justifyContent="center"
                  >
                    {linkInfo.icon}
                    <Typography sx={{ marginLeft: theme.spacing(0.5) }}>
                      {linkInfo.text}
                    </Typography>
                  </Box>
                </HoverMuiLink>
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                marginTop: { xs: theme.spacing(2), sm: theme.spacing(0) },
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                {pages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.url}
                    style={{
                      textDecoration: 'none',
                      margin: theme.spacing(0, 3),
                    }}
                  >
                    <Typography
                      sx={{
                        marginBottom: theme.spacing(0.5),
                        color: 'white',
                        '&:hover': {
                          color: theme.palette.text.primary,
                        },
                      }}
                    >
                      {page.name}
                    </Typography>
                  </Link>
                ))}
                <Typography sx={{ marginTop: theme.spacing(1.5) }}>
                  Copyright © {new Date().getFullYear()} - Sunday Beauty
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;