import { pages } from '@/src/pages/constants';
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

const ResponsiveAppBar = () => {
  const theme = useTheme();
  const router = useRouter();
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
                key={page.name}
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
                  {page.name}
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
