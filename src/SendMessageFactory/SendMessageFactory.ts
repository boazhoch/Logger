import { ISendMessageOptions } from "@/SendMessageOptions/types";
import SendMessageOptions from "@/SendMessageOptions/SendMessageOption";
import { ISendMessage } from "@/SendMessage/types";
import SendBeaconMessage from "@/SendBeaconMessage/SendBecaonMessage";
import SendFetchMessage from "@/SendFetchMessage/SendFetchMessage";
import SendMessage from "@/SendMessage/SendMessage";

class SendMessageFactory {
  static isSupportingSendBeacon = Boolean(navigator.sendBeacon);

  static create(opts: ISendMessageOptions = new SendMessageOptions(), fetchRequestOptions?: RequestInit): ISendMessage {
    const sendMessageExecuter = this.isSupportingSendBeacon
      ? new SendBeaconMessage()
      : new SendFetchMessage(fetchRequestOptions);
    return new SendMessage(opts, sendMessageExecuter);
  }
}

export default SendMessageFactory;
