import React from 'react';

import { api } from '@services';
import { Button } from '@common';
import { useChat } from '@context';
import { FormProps } from '@interface';

import * as Styles from './styles';

interface StatusProps {
  type: 'standard' | 'error' | 'success';
  title: string;
}

export default function Login(){
  const { setData, setToken } = useChat();

  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<StatusProps>({ type: 'standard', title: 'login' });

  const onSubmit = async (evt: FormProps) => {
    evt.preventDefault();

    setStatus({ ...status, type: 'standard' })

    setLoading(true);

    return api.post('/login-user', {
      nickname: evt.target['nickname'].value,
      password: evt.target['password'].value
    })
      .then(({ data }) => {
        localStorage.setItem('@token-evo', data.token);
        setData(data.data);
        setToken(data.token)
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setStatus({ type: 'error', title: 'retry' })
        }
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(loading)
        }, 1000);
      })
  };

  return (
    <Styles.Container>
      <form method='POST' onSubmit={onSubmit}>

        <input type='text' name='nickname' defaultValue='dyson._.mori' placeholder='nickname' />
        <input type='password' name='password' defaultValue='123456' placeholder='number' />

        <Button
          type='submit'
          disabled={loading}
          isLoading={loading}
          standard={status.type}
          title={status.title}
        />

      </form>

      {/* {dataset.map(item => {
        const width = 1360 / 5;
        const height = item.height / (item.width / width);
        return (
          <img src={item.url} width={width} height={height} />
          // <img src={item.url} />
        )
      })} */}
    </Styles.Container>
  )
}