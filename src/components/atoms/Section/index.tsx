import { Container, useTheme } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const StandardLayout: FunctionComponent<Props> = ({ children }) => {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" sx={{ padding: theme.spacing(2) }}>
      {children}
    </Container>
  );
};

export default StandardLayout;
