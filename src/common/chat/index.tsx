import React from 'react';

import { useChat } from '../../context';

import { Header } from './header';
import { Footer } from './footer';
import { Main } from './chat';

import { Container } from './styles';

export const Chat: React.FC = () => {
  const { contact } = useChat();

  return (
    <Container>
      <Header contact={contact} />
      <Main />
      <Footer />
    </Container>
  );
}

/*
  <Styles.Modal>
    <img
      src='https://i.pinimg.com/originals/a9/63/1c/a9631c15e05c85cadd174f40fc50ce50.png'
      alt=''
    />
    <div className='container_input'>
      <input />
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.11 13.6501L13.69 10.0601" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </Styles.Modal>
*/