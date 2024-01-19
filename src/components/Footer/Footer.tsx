/*import React from 'react';
export const Footer = () => {
  return (
    <footer>
     <p>Este é o rodapé.</p>
    </footer>
  );
};*/
import React from 'react';
import { Box, Link, Text } from '@chakra-ui/react';

export const Footer: React.FC = () => {
  return (
    <Box bg="gray.200" p={4} mt={8}>
      <Text textAlign="center" fontSize="sm" color="gray.600">
        © 2024 DioBank. Todos os direitos reservados.
      </Text>
      <Text textAlign="center" fontSize="sm" color="gray.600">
        Desenvolvido por <Link color="blue.500" href="https://vrotec.info">Varlei Oliveira</Link>
      </Text>
    </Box>
  );
};