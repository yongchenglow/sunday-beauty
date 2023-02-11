import ResponsiveAppBar from '@/src/components/organisms/AppBar';
import Footer from '@/src/components/organisms/Footer';
import { Box } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const StandardLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <Box height="100vh" paddingTop={8} display="flex" flexDirection="column">
      <ResponsiveAppBar />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default StandardLayout;
