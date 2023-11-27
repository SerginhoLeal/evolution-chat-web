import React from 'react';
import Modal from 'react-modal';

import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import evolutionLogo from '/evolution.png'

import { useChat } from '../../../context';

import * as Styles from './styles';
import { api } from '../../../services';

interface Props {
  setSelectRoom: (value: object) => void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    width: 500,
    height: 300
  }
};

export const Aside: React.FC<Props> = ({ setSelectRoom }: Props) => {
  const { data, instancesList, setInstancesList } = useChat();

  const [contact, setContact] = React.useState({
    modal: false,
    instance: ''
  });

  const onSubmit = async(evt) => {
    evt.preventDefault();

    const axios = await api.post('/create-user', {
      name: evt.target['name'].value,
      number: evt.target['number'].value
      // instance: contact.instance
    });

    if (!axios.data) throw new Error('User not Created');

    const creating_chat = await api.post('/create-chat', {
      use_logged_id: data?.id,
      number: axios.data.id,
      instance: contact.instance
    });

    console.log(creating_chat);

    // setInstancesList()
  };

  return (
    <React.Fragment>
      <Styles.Container>
        <header>
          <a href="https://react.dev" target="_blank">
            <img src={evolutionLogo} className="logo react" alt="React logo" />
          </a>
        </header>

        <nav>
          {instancesList.length === 0 && <p>loading...</p>}
          {instancesList.filter(users => users.id !== data?.id).map((contact, index) => (
            <ul key={index.toString()} title={contact.instance_name}>
              <button onClick={() => setContact({ modal: true, instance: contact.instance_name })}>
                <p>{contact.instance_name}</p>
              </button>
              {contact.chat.map((user, i) => (
                <li key={i.toString()}>
                  <button onClick={() => setSelectRoom({
                    ...user,
                    instance_name: contact.instance_name
                  })}>
                    {user.second_member.name}
                  </button>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <footer>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </footer>
        <Modal
          isOpen={contact.modal}
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => setContact({ ...contact, modal: false })}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form method='POST' onSubmit={onSubmit}>

            <input type='text' name='name' defaultValue='marco' placeholder='Create an instance' />
            <input type='text' name='number' defaultValue='553184106645' placeholder='Create an instance' />

            <button type='submit'>Enviar</button>

          </form>
        </Modal>
      </Styles.Container>
    </React.Fragment>
  )
}
