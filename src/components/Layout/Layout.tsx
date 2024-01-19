// components/Layout.tsx
import React, { ReactNode } from 'react';
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';
import PageContainer from '../../components/PageContainer';
import { Box} from '@chakra-ui/react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageContainer>
   <Box p={4} border="1px" borderColor="gray.200" borderRadius="md" boxShadow="md" mb={4}>
    <Header />
      {children}
      <Footer />
      </Box>
    </PageContainer>
  );
};

export default Layout;
