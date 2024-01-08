import React from 'react';

import { Container, Title, Text, ContainerImage, NameAndLastJoin } from './styles';

interface Props {
  contact: {
    profile: string;
    name: string;
  }
}

export const Header: React.FC<Props> = ({ contact }) => {
  const data = {
    profile: contact.profile,
    name: contact?.name.charAt(0).toUpperCase() + contact?.name.slice(1),
  };

  return (
    <Container>
 
      <ContainerImage>
        <img src={data.profile} width={50} height={50}/>
      </ContainerImage>

      <NameAndLastJoin>
        <Title>{data.name}</Title>
        <Text>ultima vez vista à 2 horas</Text>
      </NameAndLastJoin>

    </Container>
  )
};
