export interface InstanceChatProps {
  id: string;
  created_at: string;
  contact: {
    name: string;
    number: string;
  };
}

export interface InstancesProps {
  status: number;
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

// Form
export interface FormProps extends React.FormEvent<HTMLFormElement>{
  target: HTMLFormElement & {
    name: {
      value: string;
    },
    number: {
      value: string;
    }
  };
}