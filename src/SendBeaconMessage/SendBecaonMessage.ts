import { ISendMessageOptions } from "@/SendMessageOptions/types";
import { ISendMessageExecuter } from "@/SendMessage/types";

class SendBeaconMessage implements ISendMessageExecuter {
  static type = "beacon";

  send(message: string, opts: ISendMessageOptions) {
    const data = new Blob([message], { type: opts.headers.contentType });
    navigator.sendBeacon(opts.urlEndpoint, data);
  }
}

export default SendBeaconMessage;
