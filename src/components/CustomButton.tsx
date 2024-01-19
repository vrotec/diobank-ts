// components/CustomButton.tsx
import React, { ReactNode } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...rest }) => {
  return (
    <Button colorScheme="teal" {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;