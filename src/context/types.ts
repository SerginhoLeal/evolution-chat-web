import { ReactNode } from "react";
import { FormProps } from "@interface";

export type DataProps = {
  id: string;
  name: string;
  number: string;
} | null;

export interface InstancesProps {
  id: string;
  instance_name: string;
  chat: {
    id: string;
    created_at: string;
    contact: {
      name: string;
      number: string;
    };
  }[];
}

export interface ContextProps {
  users: Array<{ name: string, last_message: string, number: string }>;

  data: DataProps;
  setData: (value: DataProps) => void;

  userId: string | null;
  setUserId: (value: string) => void;

  contact: any;
  setContact: (contact: any) => void;

  loading: boolean;

  LoginSubmit: (v: FormProps) => void;
}

export interface ProviderProps {
  children: ReactNode;
}
