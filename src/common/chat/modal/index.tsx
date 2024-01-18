/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react';

import { Container } from './styles';
import { Icons } from '../../icon';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setClose: (e: number) => void;
}

export const Modal: React.FC<ModalProps> = forwardRef(({ children, isOpen = false, setClose }, ref) => {
  if(!isOpen) return null;

  return (
    <Container ref={ref}>
      {/* <header>
        <button onClick={() => setClose(-1)}>
          <Icons name='close' color='#fff' />
        </button>
      </header> */}
      {children}
    </Container>
  );
})
