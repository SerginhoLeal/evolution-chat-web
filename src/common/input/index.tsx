/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react';

import { FormProps } from '@interface';
import { Icons } from '../icon';

import * as Styles from './styles';
import { ButtonEmoji } from '../button';

export const InputMessage: React.FC = () => {
  const inputRef = useRef<any>(null);

  const [message, setMessage] = useState('');

  const onPickEmoji = (evt: any) => {
    // const ref: any = inputRef.current;

    // ref.focus();

    // const start = message.substring(0, ref.selectionStart);
    // const end = message.substring(ref.selectionStart);
    // const msg = start + evt.emoji + end;

    // setMessage(msg);
    // setCursorPosition(start.length + evt.emoji.length);
  }

  const sendMessage = (evt: FormProps) => {
    evt.preventDefault();

  };

  return (
    <Styles.Container onSubmit={sendMessage}>
      <input
        ref={inputRef}
        value={message}
        type='text'
        name='message'
        placeholder='Digite uma mensagem'
        onChange={evt => setMessage(evt.target.value)}
        // onKeyDown={handleKeyDown}
      />

      <button title='send' type='submit'>
        <Icons name='send' />
      </button>
    </Styles.Container>
  );
}
