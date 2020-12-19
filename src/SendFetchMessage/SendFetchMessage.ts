import { ISendMessageOptions } from "@/SendMessageOptions/types";
import { ISendMessageExecuter } from "@/SendMessage/types";

class SendFetchMessage implements ISendMessageExecuter {
  static type = "fetch";

  constructor(private fetchRequestOptions?: RequestInit) {}

  send(message: string, opts: ISendMessageOptions) {
    return fetch(opts.urlEndpoint, {
      method: "POST",
      credentials: "include",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-Type": opts.headers.contentType,
      },
      body: message,
      ...this.fetchRequestOptions,
    });
  }
}

export default SendFetchMessage;
