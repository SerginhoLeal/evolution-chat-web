interface FormLoginProps extends React.FormEvent<HTMLFormElement>{
  target: HTMLFormElement & {
    name: {
      value: string;
    },
    number: {
      value: string;
    }
  };
}

interface CreatingInstanceProps {
  hash: {
    apikey: string;
  };
  instance: {
    instanceName: string;
    status: string;
  };
  qrcode: {
    pairingCode: string;
    code: string;
    base64: string;
  }
}

interface CreatingWebhookInstanceProps {
  webhook: {
    instanceName: string;
    webhook: {
      url: string;
      webhook_by_events: boolean;
      webhook_base64: boolean;
      events: string[];
      enabled: boolean;
    }
  }
}

interface ConnectionWhatsappProps {
  apikey: string;
  data: {
    // connecting
    instance: string;
    statusReason?: number;
    state?: string| undefined; // 'connecting' | 'close' | 'open' | 'READ'
    status?: 'connecting' | 'close' | 'open' | undefined;

    // connected
    datetime?: number;
    fromMe?: boolean;
    id?: string;
    owner?: string; //name instance
    remoteJid?: string;

    // send or receive a message
    key?: {
      fromMe: true;
      id: string;
      remoteJid: string;
    }
    message?: {
      conversation: string; // message
      messageContextInfo?: {
        deviceListMetadata: {
          recipientKeyHash: string;
          recipientKeyIndexes: number[];
          recipientTimestamp: string;
          senderTimestamp: string;
        };
        deviceListMetadataVersion: number;
      }
    };
    messageTimestamp?: string;
    messageType?: string;
    pushName?: string;
    source?: string; // IOS or Android
  }
  date_time: string;
  destination: string; // webhook
  event: string; // message.update
  sender: string;
  server_url: string;
}

export type {
  FormLoginProps,
  CreatingInstanceProps,
  CreatingWebhookInstanceProps,
  ConnectionWhatsappProps
}