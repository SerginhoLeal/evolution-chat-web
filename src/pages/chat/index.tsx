import React from 'react';
import Modal from 'react-modal';

import { io } from 'socket.io-client';

import { Aside } from './aside';
import Chat from './chat';

import { useChat } from '../../context';
import { URL_TEST, api } from '../../services';

import { BlobBlueTop, BlobBlue, BlobPinkBright, BlobPurpleBottom, BlobYellow } from '../../assets/svg';

import InstanceScreen from './instance';

import * as Styles from './styles';

interface ChatSelectedProps {
  room: string;
  name: string;
  number: string;
}

interface ChatProps {
  message: string;
  number: string;
}

const socket = io(URL_TEST, { transports: ['websocket'] })

export default function Main() {
  const { data } = useChat();

  const [selectRoom, setSelectRoom] = React.useState<ChatSelectedProps | null>(null);
  const [chat, setChat] = React.useState<ChatProps[]>([]);

  // React.useEffect(() => {
  //   if (socket === null) return;

  //   socket.emit('add_new_user', data);

  //   return () => {
  //     socket.off('get_online_users');
  //   }
  // }, [])

  React.useEffect(() => {
    if (socket === null) return;

    socket.on('chat_message', (message) => setChat(prev => [...prev, message]))

    return () => {
      socket.off('chat_message');
    }
  }, [])

  const onSelectRoom = async(value: any) => {
    if (socket === null) return;

    const axiosData = await api.get(`/find-chat?use_logged_id=${data?.id}&target_id=${value.second_member.id}`);

    const result: { id: string } = axiosData.data;

    socket.emit('on_join_room', { room: result.id, userId: data?.id }),

    // setChat(axiosData.chat_messages ? axiosData.chat_messages : []);

    setSelectRoom({
      room: result.id,
      name: value.second_member.name,
      number: value.second_member.number,
    })
  };

  return (
    <React.Fragment>
      <Styles.Background>
      <Styles.Background>
        <img id='blob-purple-bottom' src={BlobPurpleBottom} alt='' />
        <img id='blob-blue-top' src={BlobBlueTop} alt='' />
        <img id='blob-blue' src={BlobBlue} alt='' />
        <img id='blob-yellow' src={BlobYellow} alt='' />
        <img id='blob-pink-bright' src={BlobPinkBright} alt='' />
        <img id='blob-orange' src='https://dashboard.render.com/static/media/blob-orange.e3aa62395ea58419906ab40a537b585d.svg' alt='' />
      </Styles.Background>
      </Styles.Background>

      <Styles.Container>
        <Aside setSelectRoom={onSelectRoom} />
        {selectRoom?.room ? (
          <Chat chat={chat} selectRoom={selectRoom} />
        ):(
          <InstanceScreen />
        )}
      </Styles.Container>
    </React.Fragment>
  );
}
