import { useState, createContext, useContext, useEffect } from 'react';

import { api } from '@services';
import { usePersistedState } from '@hooks';

import { ContextProps, ProviderProps, DataProps, RoomProps } from './types';

import { light } from '../styles/theme';

const Contexts = createContext({} as ContextProps);

interface UserProps {
  name: string;
  number: string;
  last_message: string;
  profile: string;
}

export const Provider = ({ children }: ProviderProps) => {
  const [data, setData] = useState<DataProps>(null);
  const [token, setToken] = useState<string | null>(null);
  const [friends, setFriends] = useState<UserProps[] | null>(null);
  const [room, setRoom] = useState<RoomProps>({
    room: null,
    contact: null,
    messages: null
  });
  const [theme, setTheme] = usePersistedState('theme', light);

  useEffect(() => {
    if (!data && !token) return;

    api.get('/friends',{
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(({ data: data_list }) => {
        const formatList = data_list.map(item => {
          let object = null;

          if (data.id === item.user_id) {
            object = item.target;
          } else if (data.id === item.target_id) {
            object = item.user;
          } else {
            object = undefined
          }

          return ({ ...item, profile: object })
        })

        setFriends(formatList);
      })
  }, [token]);

  useEffect(() => {
    const token = localStorage.getItem('@token-evo');
    setToken(`${token}`)
  }, [data]);

  const value = {
    data,
    friends,
    setData,
    room,
    setRoom,
    theme,
    setTheme,
    token,
    setToken
  };

  return (
    <Contexts.Provider value={value}>
      {children}
    </Contexts.Provider>
  )
};

export const useChat = () => {
  const context = useContext(Contexts);
  return context;
};

/*

nnot read properties of null (reading 'length')
    at Aside (http://localhost:5173/src/common/aside/index.tsx?t=1705237452499:49:60)
    at renderWithHooks (http://localhost:5173/node_modules/.vite/deps/chunk-QMINRHT5.js?v=90c8f9ee:12171:26)
    at mountIndeterminateComponent (http://localhost:5173/node_modules/.vite/deps/chunk-QMINRHT5.js?v=90c8f9ee:14921:21)
    at beginWork (http://localhost:5173/node_modules/.vite/deps/chunk-QMINRHT5.js?v=90c8f9ee:15902:22)
    at beginWork$1 (http://localhost:5173/node_modules/.vite/deps/chunk-QMINRHT5.js?v=90c8f9ee:19749:22)
    at performUnitOfWork (http://localhost:5173/node_modules/.vite/deps/chunk-QMINRHT5.js?v=90c8f9ee:19194:20)
    at workLoopSync (http://localhost:5173/node_modules/.vite/de

*/