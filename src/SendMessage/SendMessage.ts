import { ISendMessageOptions } from "@/SendMessageOptions/types";
import { ISendMessage, ISendMessageExecuter } from "./types";

class SendMessage implements ISendMessage {
  constructor(protected opts: ISendMessageOptions, private logSendMessage: ISendMessageExecuter) {
    this.logSendMessage = logSendMessage;
  }

  private wrapLog(message: string) {
    if (this.opts.headers.contentType === "application/json") {
      try {
        return JSON.stringify({ message: JSON.parse(message) });
      } catch {
        return JSON.stringify({ message });
      }
    }
    return message;
  }

  send(message: string) {
    this.logSendMessage.send(this.wrapLog(message), this.opts);
  }
}

export default SendMessage;
