import { Box, Typography, useTheme } from '@mui/material';
import { FunctionComponent } from 'react';

type Props = {
  imageUrl: string;
  title?: string;
  subTitle?: string;
  height?: number;
  backgroundPosition?: string;
};

const Banner: FunctionComponent<Props> = ({
  title,
  subTitle,
  imageUrl,
  height = 700,
  backgroundPosition = 'center',
}) => {
  const theme = useTheme();
  const styles = {
    paperContainer: {
      height: `${height}px`,
      backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url(${imageUrl})`,
      backgroundPosition: backgroundPosition,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  };
  return (
    <Box sx={styles.paperContainer} display="flex">
      <Box
        sx={{
          color: theme.palette.common.white,
          marginX: 'auto',
          textAlign: 'center',
          marginTop: theme.spacing(15),
        }}
      >
        <Typography variant="h1" sx={{ marginBottom: theme.spacing(2) }}>
          {title}
        </Typography>
        <Typography variant="h2">{subTitle}</Typography>
      </Box>
    </Box>
  );
};
export default Banner;
