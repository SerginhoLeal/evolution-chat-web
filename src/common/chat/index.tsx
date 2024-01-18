/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Header } from './header';
import { Footer } from './footer';
import { Main } from './chat';

import { Container } from './styles';

export const Chat: React.FC = () => {

  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}
