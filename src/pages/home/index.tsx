import { useChat } from '../../context';

import { Aside, Chat } from '../../common';

import * as Styles from './styles';

import IMAGE from '../../assets/img/chat.png';

export default function Home() {
  const { room } = useChat();

  return (
    <Styles.Container>
      <Aside />

      {!room.room && (
        <Styles.Empty>
          <img width={150} height={150} src={IMAGE} />
          <p>Start a conversation and the chat will appear</p>
        </Styles.Empty>
      )}

      {room.room && <Chat />}

    </Styles.Container>
  );
}
