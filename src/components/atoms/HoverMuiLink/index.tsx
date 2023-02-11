import { Link as MuiLink, LinkProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const HoverMuiLink = styled(MuiLink)<LinkProps>(({ theme }) => ({
  '&:hover': {
    color: theme.palette.secondary.dark,
  },
}));

export default HoverMuiLink;
