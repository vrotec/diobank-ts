import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface PageContainerProps extends BoxProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, ...rest }) => (
  <Box p={4} mx="auto" maxW="800px" {...rest}>
    {children}
  </Box>
);

export default PageContainer;