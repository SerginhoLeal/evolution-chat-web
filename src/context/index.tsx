import { useState, createContext, useContext, useEffect } from 'react';
import { socket } from '../services';

import {
  ContextProps,
  ProviderProps,
  DataProps
} from './types';

import { LoginSubmit } from './login';

const Contexts = createContext({} as ContextProps);

export const Provider = ({ children }: ProviderProps) => {
  const [users, setUsers] = useState<Array<{ name: string, last_message: string, number: string }> | null>(null);

  const [data, setData] = useState<DataProps>(null);
  const [contact, setContact] = useState(null);

  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   setLoading(true);
  //   if (!data) return ;

  //   (() => {
  //     api
  //       .get(`/find-instance?use_logged_id=${data?.id}`)
  //       .then(({ data }) => setInstance(data.instance))
  //       .catch(console.log)
  //       .finally(() => setLoading(false))
  //   })();

  //   if (socket === null) return;

  //   socket.on('status_message', console.log)

  //   return () => {
  //     socket.off('status_message');
  //   }
  // }, [data]);

  useEffect(() => {
    if (socket === null) return;

    socket.on('users_on', setUsers);

    return () => {
      socket.off('users_on');
    };
  }, []);

  const value = {
    data,
    contact,
    setContact,
    users,
    setData,
    userId,
    setUserId,
    loading,
    LoginSubmit
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
