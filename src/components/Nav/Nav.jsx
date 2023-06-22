import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box';

export const Nav = () => {
  return (
    <Box as="nav" display="flex" gridGap="3">
      <Button
        component={NavLink}
        // variant="contained"
        to="/"
        sx={{
          '&.active': {
            color: 'white',
            background: '#07c',
          },
          '&:hover': {},
        }}
      >
        Home
      </Button>
    </Box>
  );
};
