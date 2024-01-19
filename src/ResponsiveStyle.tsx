import React from 'react';
import { Box } from '@chakra-ui/react';

interface ResponsiveProps {
  children: React.ReactNode;
}

export const Mobile: React.FC<ResponsiveProps> = ({ children }) => {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
    >
      {children}
    </Box>
  );
};

export const Desktop: React.FC<ResponsiveProps> = ({ children }) => {
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
    >
      {children}
    </Box>
  );
};
