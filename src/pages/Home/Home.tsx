// pages/Home.tsx
import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Box, Heading, Text } from '@chakra-ui/react';

const Home: React.FC = () => {
  return (
    <Layout>
      <Box>
        <Heading>Bem-vindo ao Meu Site</Heading>
        <Text>Este é o conteúdo da página inicial.</Text>
        {/* Adicione o restante do conteúdo da sua página Home aqui */}
      </Box>
    </Layout>
  );
};

export default Home;