import { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/src/theme';
import AppScript from './_scripts';
import AppHead from './_head';
import { NextPage } from 'next';
import { poppins } from '@/src/font';
import { IntlProvider } from 'react-intl';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <IntlProvider locale="en" defaultLocale="en">
        <AppHead />
        <ThemeProvider theme={theme}>
          <AppScript />
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <main className={poppins.className}>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </IntlProvider>
    </>
  );
};

export default App;
