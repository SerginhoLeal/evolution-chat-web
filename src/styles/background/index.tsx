import React from 'react';

import { Container } from './styles';

import { BlobBlueTop, BlobBlue, BlobPinkBright, BlobPurpleBottom, BlobYellow } from '../../assets/svg';

const Background: React.FC = () => {
  return (
    <Container>
      <img id='blob-purple-bottom' src={BlobPurpleBottom} alt='' />
      <img id='blob-blue-top' src={BlobBlueTop} alt='' />
      <img id='blob-blue' src={BlobBlue} alt='' />
      <img id='blob-yellow' src={BlobYellow} alt='' />
      <img id='blob-pink-bright' src={BlobPinkBright} alt='' />
    </Container>
  );
}

export default Background;