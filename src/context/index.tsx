import { useState, ReactNode, createContext, useContext, useEffect } from 'react';
import { URL_TEST, api, leadApi } from '../services';

import {
  InstancesListProps
} from './types';
import { io } from 'socket.io-client';

type DataProps = {
  id: string;
  name: string;
  number: string;
} | null;

interface ContextProps {
  data: DataProps;
  setData: (value: DataProps) => void;

  userId: string | null;
  setUserId: (value: string) => void;

  instancesList: InstancesListProps[];
  setInstancesList: (instancesList: InstancesListProps[]) => void;
}

interface ProviderProps {
  children: ReactNode;
}

const Contexts = createContext({} as ContextProps);

const socket = io(URL_TEST, { transports: ['websocket'] })

export const Provider = ({ children }: ProviderProps) => {
  const [data, setData] = useState<DataProps>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [instancesList, setInstancesList] = useState<InstancesListProps[]>([]);

  useEffect(() => {
    if (!data) return ;

    (async() => {
      const axios = await api.get(`/find-instance?use_logged_id=${data?.id}`);

      const array = axios.data as Array<InstancesListProps>;

      array.map((log) => {
        leadApi.get(`/instance/fetchInstances?instanceName=${log.instance_name}`)
          .then(l => {
            setInstancesList(prev => [...prev, { ...log, status: l.data.instance.status }])
          })
          .catch(console.log)

      });
    })();

    if (socket === null) return;

    socket.on('status_message', console.log)

    return () => {
      socket.off('status_message');
    }
  }, [data]);

  return (
    <Contexts.Provider value={{ data, setData, userId, setUserId, instancesList, setInstancesList }}>
      {children}
    </Contexts.Provider>
  )
};

export const useChat = () => {
  const context = useContext(Contexts);
  return context;
};
