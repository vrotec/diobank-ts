import React from 'react';
import Layout from '../../components/Layout/Layout';
import { IoIosPhonePortrait, IoIosDesktop } from 'react-icons/io';
import { motion } from 'framer-motion';
import { Input, Button } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';

const Login: React.FC = () => {
  const inputStyle = {
    marginBottom: '8px', // Adapte o valor conforme necessário
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });

  return (
      <Layout>
        <h1>Informe seu dados de acesso:</h1>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 1.0}}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {isDesktopOrLaptop ? (
            <IoIosDesktop size={50} />
          ) : (
            <IoIosPhonePortrait size={50} />
          )}
          <Input placeholder="Digite seu email" style={inputStyle} />
          <Input type="password" placeholder="Digite sua senha" style={inputStyle} />
          <Button>
            <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.0 }}>
              Entrar
            </motion.span>
          </Button>
        </motion.div>
      </Layout>
  );
};

export default Login;