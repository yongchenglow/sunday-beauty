import { Box, Typography, useTheme } from '@mui/material';
import { FunctionComponent } from 'react';

type Props = {
  title: string;
  imageUrl: string;
};

const Banner: FunctionComponent<Props> = ({ title, imageUrl }) => {
  const theme = useTheme();
  const styles = {
    paperContainer: {
      height: '1000px',
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: 'bottom',
    },
  };
  return (
    <Box my={3}>
      <Typography
        variant="h2"
        sx={{ textAlign: 'center', marginBottom: theme.spacing(2) }}
      >
        {title}
      </Typography>
      <Box sx={styles.paperContainer}></Box>
    </Box>
  );
};
export default Banner;
