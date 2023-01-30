import { pages } from '@/src/components/constants';
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Button,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

const ResponsiveAppBar = () => {
  const theme = useTheme();
  const router = useRouter();
  const intl = useIntl();

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            justifyContent="center"
            sx={{
              flexGrow: 1,
              display: 'flex',
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.name.id}
                href={page.url}
                style={{
                  textDecoration: 'none',
                  margin: theme.spacing(0, 3),
                }}
              >
                <Button
                  sx={{
                    color:
                      router.asPath === page.url
                        ? theme.palette.text.primary
                        : 'white',
                    display: 'block',
                    textTransform: 'unset',
                    fontSize: theme.spacing(2),
                    '&:hover': {
                      color: theme.palette.text.primary,
                    },
                  }}
                >
                  {intl.formatMessage(page.name)}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
