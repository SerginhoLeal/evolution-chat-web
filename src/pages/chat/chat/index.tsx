import React from 'react';

import { io } from 'socket.io-client';

import * as Styles from './styles';
import { useChat } from '../../../context';
import { URL_TEST, leadApi } from '../../../services';

interface FormProps extends React.FormEvent<HTMLFormElement>{
  target: HTMLFormElement;
}

interface ChatSelectedProps {
  room: string;
  name: string;
  number: string;
}

interface ScreenProps {
  chat: {
    message: string;
    number: string;
  }[];
  selectRoom: ChatSelectedProps | null
}

const socket = io(URL_TEST, { transports: ['websocket'] })

const ScreenChat: React.FC<ScreenProps> = ({ chat,  selectRoom }: ScreenProps) => {
  const { data } = useChat();

  const sendMessage = (evt: FormProps) => {
    evt.preventDefault()

    socket.emit('sendMessage', {
      room: selectRoom?.room,
      name: data?.name,
      number: data?.number,
      message: evt.target['message'].value
    });

    leadApi.post(`/message/sendText/whatsapp_instance_sergio`, {
      number: selectRoom?.number,
      options: {
        delay: 1200,
        presence: "composing",
        linkPreview: false
      },
      textMessage: {
        text: evt.target['message'].value
      }
    })
      .then(success => {
        console.log(success);
      })

    return evt.target['message'].value = null
  };

  return (
    <Styles.Content>
      {!selectRoom && (
        <Styles.Empty>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
            <path d="M8.5 10.5H15.5" stroke="#303030" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 18.4299H11L15.45 21.39C16.11 21.83 17 21.3599 17 20.5599V18.4299C20 18.4299 22 16.4299 22 13.4299V7.42993C22 4.42993 20 2.42993 17 2.42993H7C4 2.42993 2 4.42993 2 7.42993V13.4299C2 16.4299 4 18.4299 7 18.4299Z" stroke="#303030" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p>Crie uma Instância para interagir com seus clientes</p>
        </Styles.Empty>
      )}

      <Styles.Chat>
        {chat.map((mapping, index) => (
          <Styles.Box key={index} sender={String(mapping?.number === data?.number)}>
            <div key={index}>
              <p>{mapping?.message}</p>
            </div>
          </Styles.Box>
        ))}
      </Styles.Chat>

      {selectRoom && (
        <Styles.TextBox onSubmit={sendMessage}>
          <input type='text' name='message' />
          <button title='send' type='submit'>send</button>
        </Styles.TextBox>
      )}
    </Styles.Content>
  );
}

export default ScreenChat;