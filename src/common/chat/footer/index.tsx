import React, { useRef, useState} from 'react';

import { ButtonFiles, ButtonEmoji } from '../../index';
import { socket } from '../../../services';

import * as Styles from './styles';

export const Footer: React.FC = () => {
  const inputRef = useRef<any>(null);

  const [message, setMessage] = useState<string>('');
  const [cursorPosition, setCursorPosition] = useState<string>('');

  const onPickEmoji = (evt: { emoji: any }) => {
    const ref: any = inputRef.current;

    ref.focus();

    const start = message.substring(0, ref.selectionStart);
    const end = message.substring(ref.selectionStart);
    const msg = start + evt.emoji + end;

    setMessage(msg);
    setCursorPosition(start.length + evt.emoji.length);
  }

  const sendMessage = (evt: any) => {
    evt.preventDefault()

    const mes = {
      name: 'data?.name',
      message_id: 's12a',
      sender: '5531975564133',
      room: 'chat_id_e2e',
      type_message: 'text',
      message: evt.target['message'].value,
      create_at: 'now'
    };

    socket.emit('send_message', mes);

    return evt.target['message'].value = null
  };

  const handleKeyDown = event => {
    event.preventDefault()

    if (event.key === 'Enter') {
      setMessage('')
    }
  };

  React.useEffect(() => {
    inputRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  return (
    <Styles.Container>
      <ButtonEmoji onSelectEmoji={onPickEmoji} />
      <ButtonFiles />

      <Styles.Form onSubmit={sendMessage}>
        <input
          ref={inputRef}
          value={message}
          type='text'
          name='message'
          placeholder='Digite uma mensagem'
          onChange={evt => setMessage(evt.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button title='send' type='submit'>
          {Object.keys('').length > 0 ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.11 13.6501L13.69 10.0601" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.3501 9.6499V11.3499C4.3501 15.5699 7.7801 18.9999 12.0001 18.9999C16.2201 18.9999 19.6501 15.5699 19.6501 11.3499V9.6499" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.6101 6.43012C11.5101 6.10012 12.4901 6.10012 13.3901 6.43012" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.2 8.55007C11.73 8.41007 12.28 8.41007 12.81 8.55007" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 19V22" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          )}
        </button>

      </Styles.Form>

    </Styles.Container>
  );
}
