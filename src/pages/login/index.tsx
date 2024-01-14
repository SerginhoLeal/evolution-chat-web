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
  const { setData } = useChat();

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
      .then(({ data }) => setData(data))
      .catch((error) => {
        if (error.response.status === 404) {
          setStatus({ type: 'error', title: 'retry' })
        }
      })
      .finally(() => setLoading(loading))
  };

  return (
    <Styles.Container>
      <form method='POST' onSubmit={onSubmit}>

        <input type='text' name='nickname' defaultValue='dyson._.mori' placeholder='nickname' />
        <input type='text' name='password' defaultValue='123456' placeholder='number' />

        <Button
          type='submit'
          disabled={loading}
          isLoading={loading}
          standard={status.type}
          title={status.title}
        />

      </form>
    </Styles.Container>
  )
}