import { Box } from 'components/Box';

import { Nav } from 'components/Nav';

export const AppBar = () => {
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      mb={4}
      p={3}
      borderBottom="1px solid #2a363b"
    >
      <Nav />
    </Box>
  );
};
