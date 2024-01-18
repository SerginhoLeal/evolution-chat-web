import { ReactNode } from "react";
import { FormProps } from "@interface";

export type DataProps = {
  id: string;
  name: string;
  email: string;
  photo: string;
  number: string;
  nickname: string;
} | null;

export interface Friends {
  id: string;
  user_id: string;
  target_id: string;
  message_id: null,
  profile: {
    id: string;
    nickname: string;
    photo: string;
  },
  target: {
    id: string;
    nickname: string;
    photo: string;
  },
  user: {
    id: string;
    nickname: string;
    photo: string;
  },
  messages: {
    message: string;
    created_at: Date;
    message_type: 'image' | 'video' | 'text';
  }[]
}

export interface RoomProps {
  contact: {
    profile: {
      name: string;
      photo: string;
      nickname: string;
    }
  } | null;
  room: string | null;
  messages: Array<object> | null;
}
export interface ContextProps {
  friends: Array<Friends>;

  data: DataProps;
  setData: (value: DataProps) => void;

  room: RoomProps;
  setRoom: (contact: RoomProps) => void;

  theme: any;
  setTheme: (theme: any) => void;
}

export interface ProviderProps {
  children: ReactNode;
}
