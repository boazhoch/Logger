export interface ISendMessageExecuter {
  send(messsage: string): void;
  flush(): void;
}

export type ISendMessage = ISendMessageExecuter;
