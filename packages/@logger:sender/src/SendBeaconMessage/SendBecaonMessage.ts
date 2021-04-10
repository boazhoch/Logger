import { ISendMessageExecuter } from "../SendMessage/types";
import { ISendMessageOptions } from "../SendMessageOptions/types";

class SendBeaconMessage implements ISendMessageExecuter {
  static type = "beacon";

  constructor(private opts: ISendMessageOptions /* private fetchRequestOptions?: RequestInit */) {
    this.opts = opts;
  }

  send(message: string) {
    const data = new Blob([message], { type: this.opts.headers.contentType });
    navigator.sendBeacon(this.opts.urlEndpoint, data);
  }

  flush() {
    console.log("Not implemented");
  }
}

export default SendBeaconMessage;
