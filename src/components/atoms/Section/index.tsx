import { Box, Container, Typography, useTheme } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

interface Props {
  title?: string;
  children?: ReactNode;
  py?: number;
}

const Section: FunctionComponent<Props> = ({ title, children, py = 5 }) => {
  const theme = useTheme();
  const firstWordOfTitle = title ? title.split(' ')[0].toLowerCase() : '';
  return (
    <Container maxWidth="xl" sx={{ padding: theme.spacing(2) }}>
      <Box py={py}>
        {title && (
          <Typography
            variant="h3"
            id={firstWordOfTitle}
            style={{
              textAlign: 'center',
              marginBottom: theme.spacing(3),
              scrollMarginTop: theme.spacing(12),
            }}
          >
            {title}
          </Typography>
        )}
        {children}
      </Box>
    </Container>
  );
};

export default Section;
