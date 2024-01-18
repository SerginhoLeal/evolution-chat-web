import React from 'react';
import moment from 'moment';

import { useChat } from '../../context';
import { socket, api } from '../../services';
import { Icons } from '../icon';

import Empty from '../../assets/img/chat_empty.png';
import Logo from '../../assets/img/logo.jpg';

// import reactLogo from '/react.svg'
// import viteLogo from '/vite.svg'
// import evolutionLogo from '/evolution.png'

import * as Styles from './styles';

export const Aside: React.FC = () => {
  const { token, friends, setRoom } = useChat();

  const onJoinRoom = async (contact: { profile: { id: string } }) => {
    const { data } = await api.get(`/friend?target_id=${contact.profile.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    const { id: room } = data;

    const { data: messages } = await api.get(`/messages-whatsapp?room_id=${room}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });

    socket.emit('on_join_room', { room });

    return setRoom({ contact, room, messages })
  };

  return (
    <Styles.Container>
      <header>
        <img src={Logo} alt="React logo" />
      </header>

      <Styles.Nav>
        {friends ? friends.map((user, index) => (
          <Styles.Contact key={index} onClick={() => onJoinRoom(user)}>

            <Styles.Image>
              <img src={user.profile.photo} width={50} height={50} />
            </Styles.Image>

            <Styles.Info>

              <Styles.DataUser>
                <h3>{user.profile.nickname}</h3>
                {/* <span /> */}
              </Styles.DataUser>

              <Styles.DataUser>

                <div style={{ display: 'flex', alignItems: 'end', width: 100 }}>
                  {user.messages[0]?.message_type !== 'text' && (
                    <Icons color='#fff' size='20' name={user.messages[0]?.message_type} />
                  )}
                  <p>{user.messages[0]?.message || user.messages[0]?.message_type}</p>
                </div>

                <p>{moment(user.messages[0]?.created_at).format('LT')}</p>

              </Styles.DataUser>

            </Styles.Info>

          </Styles.Contact>
        )) : (
          <Styles.Empty>
            <img src={Empty} width={100} />
            <p>Nobody online</p>
          </Styles.Empty>
        )}
      </Styles.Nav>

      {/* <footer>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="vite" alt="vite" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="react" alt="React logo" />
        </a>
      </footer> */}
    </Styles.Container>
  )
};

// Ao carregar a lista de contatos, buscar o tabanho das imagens e texto
// trazer o width e height das imagens
// trazer quantas linhas/caracteres um texto ocupou