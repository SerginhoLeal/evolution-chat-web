import React from 'react';

import { FormLoginProps } from './types';
import { useChat } from '../../context';
import { api } from '../../services';
import { Button } from '../../common';

import { BlobBlueTop, BlobBlue, BlobPinkBright, BlobPurpleBottom, BlobYellow } from '../../assets/svg';

import * as Styles from './styles';

export default function Login(){
  const { setData } = useChat();

  const [loading, setLoading] = React.useState(false);

  const onSubmit = async(evt: FormLoginProps) => {
    evt.preventDefault();
    setLoading(true);

    api.post('/login-user', {
      name: evt.target['name'].value,
      number: evt.target['number'].value
    })
      .then(success => setData(success.data))
      .finally(() => setLoading(false))
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

        <Button type='submit' title='login' isLoading={loading} />

      </form>
    </Styles.Container>
  )
}