import { useChat } from '../../context';

import * as Styles from './styles';

import { FormLoginProps } from './types';
import { URL_TEST, api } from '../../services';

import { BlobBlueTop, BlobBlue, BlobPinkBright, BlobPurpleBottom, BlobYellow } from '../../assets/svg';
import { io } from 'socket.io-client';

const socket = io(URL_TEST, { transports: ['websocket'] })

export default function Login(){
  const { setData } = useChat();

  const onSubmit = async(evt: FormLoginProps) => {
    evt.preventDefault();

    const { data } = await api.post('/login-user', {
      name: evt.target['name'].value,
      number: evt.target['number'].value
    });

    // socket.emit('instance_connected', {
    //   instance: 'instance',
    //   message: 'Instance Connected',
    //   status: true
    // })

    return setData(data)
  };

  return (
    <Styles.Container>

      <Styles.Background>
        <img id='blob-purple-bottom' src={BlobPurpleBottom} alt='' />
        <img id='blob-blue-top' src={BlobBlueTop} alt='' />
        <img id='blob-blue' src={BlobBlue} alt='' />
        <img id='blob-yellow' src={BlobYellow} alt='' />
        <img id='blob-pink-bright' src={BlobPinkBright} alt='' />
        <img id='blob-orange' src='https://dashboard.render.com/static/media/blob-orange.e3aa62395ea58419906ab40a537b585d.svg' alt='' />
      </Styles.Background>

      <form method='POST' onSubmit={onSubmit}>

        <input type='text' name='name' defaultValue='serginho' placeholder='Create an instance' />
        <input type='text' name='number' defaultValue='553175564133' placeholder='Create an instance' />
        
        <button type='submit'>Enviar</button>

      </form>
    </Styles.Container>
  )
}