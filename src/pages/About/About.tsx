// pages/About.tsx
import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Box, Heading, Text } from '@chakra-ui/react';


const About: React.FC = () => {
  return (
    <Layout>
      <Box>
        <Heading>Sobre Nós</Heading>
        <Text>Esta é a página Sobre Nós.</Text>
        {/* Adicione o restante do conteúdo da sua página About aqui */}
      </Box>
    </Layout>
  );
};

export default About;