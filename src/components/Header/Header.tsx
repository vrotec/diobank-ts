// components/Header/Header.tsx
import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      bg="blue.500"
      p="4"
    >
      <Flex>
        <Link href="/Home" color="white" mr="4">
          Inicio
        </Link>
        <Link href="/login" color="white" mr="4">
          Login
        </Link>
        <Link href="/about" color="white">
          Sobre-nos
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;