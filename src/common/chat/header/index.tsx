import React from 'react';

import { Container, ContentFriend, Title, Text, ContainerImage, NameAndLastJoin, Settings } from './styles';
import { useChat } from '@context';
import { Icons } from '@common';

export const Header: React.FC = () => {
  const { room, setRoom } = useChat();

  if (!room.contact) return;

  const data = {
    profile: room.contact.profile.photo,
    name: room.contact.profile.nickname.charAt(0).toUpperCase() + room.contact.profile.nickname.slice(1),
  };

  const onCleanContact = () => setRoom({ contact: null, messages: null, room: null })

  return (
    <Container>

      <ContentFriend>
        <ContainerImage>
          <img src={data.profile} width={50} height={50}/>
        </ContainerImage>

        <NameAndLastJoin>
          <Title>{data.name}</Title>
          {/* <Text>ultima vez vista à 2 horas</Text> */}
        </NameAndLastJoin>
      </ContentFriend>

      <Settings onClick={onCleanContact}>
        <Icons name='close' size='20' />
      </Settings>

    </Container>
  )
};
