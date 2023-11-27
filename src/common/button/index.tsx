import React from 'react';

import * as Styles from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoading: boolean;
}

export const Button: React.FC<ButtonProps> = ({ title, isLoading }: ButtonProps) => {
  return (
    <Styles.Container>
      {isLoading ? (
        <span></span>
      ): (
        <p>{title}</p>
      )}
    </Styles.Container>
  );
}
