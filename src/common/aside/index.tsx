import React from 'react';

import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import evolutionLogo from '/evolution.png'

import { useChat } from '../../context';
import { socket } from '../../services';

import Empty from '../../assets/img/chat_empty.png';

import * as Styles from './styles';

const database_chat = [
  {
    id: 'e2e',
    room: 'chat_id_e2e',
    users: [
      '5531975564133',
      '5531992364331'
    ]
  },
  {
    id: 'e2e',
    room: 'chat_id_a2a',
    users: [
      '5531975564133',
      '5531975564136'
    ]
  }
];

export const Aside: React.FC = () => {
  const { users, data, setContact } = useChat();

  const remove_me = users.filter(remove => remove.number !== data?.number);

  const onJoinRoom = (user) => {
    const result = database_chat.find(chat => chat.users.includes(user.number));

    if (!result) throw new Error('Chat not found');

    socket.emit('on_join_room', { room: result.room });
    // socket.emit('loading_messages', { room: result.room });

    return setContact({ ...user, room: result.room });
  };

  return (
    <Styles.Container>
      <header>
        <a href="http://doc.evolution-api.com/help-center" target="_blank">
          <img src={evolutionLogo} className="logo react" alt="React logo" />
        </a>
      </header>

      <Styles.Nav>
        {remove_me.length > 0 ? remove_me.map((user, index) => (
          <Styles.Contact key={index} onClick={() => onJoinRoom(user)}>
            <span>
              <img src={user.profile} width={50} height={50} />
            </span>
            <span>
              <h3>{user.name}</h3>
              <div>
                <p>{user.last_message}</p>
                <p>12:50</p>
              </div>
            </span>
          </Styles.Contact>
        )) : (
          <Styles.Empty>
            <img src={Empty} width={100} />
            <p>Nobody online</p>
          </Styles.Empty>
        )}
      </Styles.Nav>

      <footer>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </footer>
    </Styles.Container>
  )
};
