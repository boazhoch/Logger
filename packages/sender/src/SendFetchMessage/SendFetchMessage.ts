import { ISendMessageExecuter } from "../SendMessage/types";
import { ISendMessageOptions } from "../SendMessageOptions/types";

class SendFetchMessage implements ISendMessageExecuter {
  static type = "fetch";

  constructor(private opts: ISendMessageOptions, private fetchRequestOptions?: RequestInit) {
    this.opts = opts;
  }

  send(message: string) {
    return fetch(this.opts.urlEndpoint, {
      method: "POST",
      credentials: "include",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-Type": this.opts.headers.contentType,
      },
      body: message,
      ...this.fetchRequestOptions,
    });
  }

  flush() {
    console.log("Not implemented");
  }
}

export default SendFetchMessage;
