import React, { useRef, useState } from 'react';

import { useChat } from '@context';
import { socket } from '@services';
import { useIntersectionObserver } from '@hooks';

import { Modal } from '../modal';

import { MessageProps } from './type';
import { Skeleton } from './constants';

import * as Styles from './styles';

export const Main: React.FC = () => {
  const { data, room } = useChat();

  const mesRef = useRef<any>(null);
  const wrapperRef = useRef(null);

  const [messages, setMessages] = useState<MessageProps[]>([]);

  const [loading, setLoading] = useState(true);
  const [preloading, setPreLoading] = useState(true);
  const [selectFile, setSelectFile] = useState(-1);

  const lastMessageRef = useIntersectionObserver<HTMLLIElement>(() => {
    if (loading) return;

    setLoading(true);

    // api.post('/whatsapp-messages', { room: 'room_e2e', take: quantity })
    //   .then(({ data }) => setMessages((prev) => [...data, ...prev]))
    //   .finally(() => {

    //     setTimeout(() => {
    //       setLoading(false);
    //       setQuantity(quantity + 20)
    //     }, 1000);

    //     mesRef.current.addEventListener('DOMNodeInserted', (event: any) => {
    //       const { currentTarget, target } = event;

    //       const child = event.relatedNode.childNodes;
    //       let quantity_children_exist: number = 0;

    //       for (let index = 0; index < child.length; index++) {
    //         const element = child[index];
    //         // if (element.outerText === "look at my new profile") {
    //         //   console.log(`outerText ${element.outerText} - ${element.clientHeight}`);
    //         //   console.log(event);
    //         // }

    //         quantity_children_exist += element.clientHeight
    //       }

    //       if (event.relatedNode.childElementCount === quantity) {
    //         console.log(quantity_children_exist / quantity);
    //         currentTarget.scroll({ top: (quantity_children_exist / quantity) * 20 });
    //       }

    //     });

    //   })

  }, []);

  React.useEffect(() => {
    mesRef.current.addEventListener('DOMNodeInserted', (event) => {
      const { currentTarget, target } = event;
      setTimeout(() => {
        currentTarget.scroll({ top: 3000, behavior: 'smooth' });
      }, 100)
    });

    setMessages(room.messages);

    setTimeout(() => {
      setPreLoading(false)
    }, 500)

  }, [room.room]);

  React.useEffect(() => {
    if (socket === null) return;

    socket.on('chat_message', (evt) => setMessages(prev => [...prev, evt]));

    return () => {
      socket.off('chat_message');
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener('keydown', (evt) => {
      if(evt.keyCode === 27) {
        setSelectFile(-1)
      }
    })
    return () => window.removeEventListener('keydown', close)
  },[])

  React.useEffect(() => {
    const handler = (event) => {
      if (!wrapperRef.current) {
        return;
      }
      // if click was not inside of the element. "!" means not
      // in other words, if click is outside the modal element
      if (!wrapperRef.current.contains(event.target)) {
        alert('false');
      }
    };
    // the key is using the `true` option
    // `true` will enable the `capture` phase of event handling by browser
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <Styles.Container ref={mesRef}>
      {messages.map((message, index, row) => (
        <Styles.Box
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ref={row.length - (row.length - 1) === index ? lastMessageRef : null}
          key={index}
          sender={message.number === data?.number}>

          {message.message_type === 'image' && (
            <Styles.ImageMessage key={index} onClick={() => setSelectFile(index)} sender={message.number === data?.number}>
              <img style={{ transition: '1s', opacity: preloading ? 0 : 1 }} src={message.file} alt='' />
              <span>
                <Skeleton width={message.width} height={message.height} />
              </span>
              {message.message !== '' && <p>{message.message}</p>}
            </Styles.ImageMessage>
          )}

          {message.message_type === 'video' && (
            <Styles.VideoMessage onClick={() => setSelectFile(index)} sender={message.number === data?.number} key={index}>
              <video style={{ transition: '1s', opacity: preloading ? 0 : 1 }} src={message.file} />
              <span>
                <Skeleton width={message.width} height={message.height} />
              </span>
              {message.message !== '' && <p>{message.message}</p>}
            </Styles.VideoMessage>
          )}

          {message.message_type === 'text' && (
            <Styles.Message sender={message.number === data?.number} key={index}>
              <p>{message.message}</p>
            </Styles.Message>
          )}

        </Styles.Box>
      ))}

      <Modal ref={wrapperRef} isOpen={selectFile !== -1} setClose={setSelectFile}>
        {messages[selectFile]?.message_type === 'video' ? (
          <video
            // ref={ref => ref.volume = 0.2}
            src={messages[selectFile].file} controls height={300} />
        ) : (
          <img src={messages[selectFile]?.file} alt='' />
        )}
      </Modal>
    </Styles.Container>
  )
}
