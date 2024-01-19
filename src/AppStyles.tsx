// src/AppStyles.tsx
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 16px;
`;

export const StyledButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

export const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DesktopWrapper = styled.div`
  /* Adicione estilos específicos para DesktopWrapper aqui */
`;

export const DesktopInput = styled(Input)`
  /* Adicione estilos específicos para o Input em Desktop aqui */
  margin-bottom: 20px;
`;

export const DesktopButton = styled(StyledButton)`
  /* Adicione estilos específicos para o Button em Desktop aqui */
`;

export const Icon = styled.div`
  margin-bottom: 10px;
  color: #3498db;
  font-size: 30px;
`;