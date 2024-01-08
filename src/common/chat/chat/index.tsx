import React, { useRef, useState } from 'react';

import { useChat } from '../../../context';
import { socket } from '../../../services';

import * as Styles from './styles';

interface FormProps extends React.FormEvent<HTMLFormElement>{
  target: HTMLFormElement;
}

export const Main: React.FC = () => {
  const { data, contact } = useChat();

  const mesRef = useRef(null);

  const [messages, setMessages] = useState<Array<object>>([]);

  // const lastMessageRef = useIntersectionObserver<HTMLLIElement>(() => {
  //   if (loading) return;

  //   setLoading(true);

  //   fetchMessages(whatsapp, `${pages.page}`, `${pages.messages}`)
  //     .then((data) => setMessages((prev) => [...data, ...prev]))
  //     .finally(() => {
  //       setPages({
  //         page: pages.page + 10, // msg
  //         messages: 10,
  //       });

  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 1000);

  //       mesRef.current.addEventListener('DOMNodeInserted', (event: any) => {
  //         const { currentTarget: target } = event;
  //         target.scroll({
  //           top: 60 * 20 + 105,
  //         });
  //       });
  //     });
  // }, []);

  React.useEffect(() => {
    mesRef.current.addEventListener('DOMNodeInserted', (event) => {
      const { currentTarget: target } = event;
      target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
    });
  }, []);

  React.useEffect(() => {
    if (socket === null) return;

    socket.on('chat_message', (evt) => setMessages(prev => [...prev, evt]));
    socket.on('loading_messages', setMessages);

    return () => {
      socket.off('chat_message');
      socket.off('loading_messages');
    };
  }, [contact]);

  return (
    <Styles.Container ref={mesRef}>
      {messages.map((mapping, index) => (
        <Styles.Box key={index} sender={String(mapping?.sender === data?.number)}>
          <div key={index}>
            <>
              <span />
              {mapping.type_message === 'text' && <p>{mapping.message}</p>}
              {mapping.type_message === 'image' && (
                <container>
                  <img src={mapping.file} alt='' />
                  <p>{mapping.message}</p>
                </container>
              )}
            </>
          </div>
        </Styles.Box>
      ))}
    </Styles.Container>
  )
}
