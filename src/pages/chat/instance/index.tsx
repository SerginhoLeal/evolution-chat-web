import React from 'react';

import { io } from 'socket.io-client';

// import { Instances } from '../../../assets/svg';
import { URL_TEST, api, leadApi } from '../../../services';
import { useChat } from '../../../context';

import * as Styles from './styles';

const socket = io(URL_TEST, { transports: ['websocket'] })

const InstanceScreen: React.FC = () => {
  const { data, setInstancesList } = useChat();
  const [status, setStatus] = React.useState<'creating' | 'empty' | 'qrcode' | 'success'>('empty');
  const [qrcode, setQrcode] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    socket.on('instance_message', (socket_evt: { instance: string, message: string, status: boolean }) => {
      const { instance, message, status = false } = socket_evt;
      console.log(socket_evt);
      
      if(status) {
        setInstancesList(prev => [...prev, {
          instance_name: instance,
          chat: []
        }])
        return setStatus('success');
      }
    })
  }, [])

  const onSubmit = async(event) => {
    event.preventDefault();

    if (!data) throw new Error('Data does not exist');

    setLoading(true);

    // creating instance
    const created = await leadApi.post('/instance/create', {
      instanceName: event.target['instance_name'].value, // "whatsapp_instance_sergio",
      qrcode: true,
      number: data?.number
    });

    if (created.status !== 201) throw new Error('Instance not Created');

    socket.emit('join_instance', { instance_room: created.data.instance.instanceName }),

    // creating webhook
    leadApi.post(`/webhook/set/${created.data.instance.instanceName}`, {
      url: "https://evolution-chat.onrender.com/api/send-by-whatsapp",
      webhook_by_events: false,
      webhook_base64: false,
      events: [
        "QRCODE_UPDATED",
        "MESSAGES_UPSERT",
        "MESSAGES_UPDATE",
        "MESSAGES_DELETE",
        "SEND_MESSAGE",
        "CONNECTION_UPDATE",
        "CALL"
      ]
    })
      .then(() => {
        setLoading(false);
        setStatus('qrcode');
        setQrcode(created.data.qrcode.base64)
      })
      .catch(console.log)

    api.post(`create-instance?use_logged_id=${data.id}`, {
      instance_name: created.data.instance.instanceName
    })
  };

  return (
    <Styles.Container>

      {status === 'empty' && (
        <Styles.Empty>
          {/* <p>Crie uma Instância para interagir com seus clientes</p> */}
          <button onClick={() => setStatus('creating')}>
            {/* <img src={Instances} width={20} /> */}
            Create an Instance
          </button>
        </Styles.Empty>
      )}

      {status === 'creating' && (
        <form method='POST' onSubmit={onSubmit}>

          <input type='text' name='instance_name' defaultValue='whatsapp_instance_sergio' placeholder='Instance Name' />

          <button type='submit'>Create</button>
        </form>
      )}

      {status === 'qrcode' && (
        <img width={300} src={qrcode} />
      )}
      
      {status === 'success' && (
        <p>instance connected</p>
      )}

    </Styles.Container>
  )
}
export default InstanceScreen;
