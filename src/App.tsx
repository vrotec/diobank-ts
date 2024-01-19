import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import CustomButton from './components/CustomButton';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import About from './pages/About/About';

const App: React.FC = () => {
  const handleLogin = () => {
    function ChamaAction() {
      // Solicita que o usuário insira seu nome
      var nomeDigitado = prompt('Digite seu nome:');
      // Verifica se o usuário pressionou "Cancelar" ou deixou o campo em branco
      if (nomeDigitado === null || nomeDigitado.trim() === '') {
        alert('Você não digitou um nome válido. Tente novamente.');
        return;
      }
      // Exibe uma saudação com o nome digitado
      alert(`Bem-vindo, ${nomeDigitado}!`);
    }
  
    // Chama a função quando necessário (por exemplo, ao clicar em um botão)
    ChamaAction();    
  };

  return (
    <ChakraProvider>
      <Router>
          <CustomButton onClick={handleLogin}>Desafio da aula</CustomButton>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;