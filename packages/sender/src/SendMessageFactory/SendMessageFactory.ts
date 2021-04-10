import { ISendMessage } from "../SendMessage/types";
import SendBeaconMessage from "../SendBeaconMessage/SendBecaonMessage";
import SendFetchMessage from "../SendFetchMessage/SendFetchMessage";
import SendMessage from "../SendMessage/SendMessage";
import BatchSendMessagerFactory from "../BatchSendMessagerFactory/BatchSendMessagerFactory";
import { ISendMessageOptions } from "../SendMessageOptions/types";

class SendMessageFactory {
  static isSupportingSendBeacon = Boolean(navigator.sendBeacon);

  static create(
    opts: ISendMessageOptions = {
      urlEndpoint: "/logs",
      headers: {
        contentType: "text/plain",
      },
    },
    maxCounteUntil?: number,
    fetchRequestOptions?: RequestInit
  ): ISendMessage {
    const sendMessageExecuter = this.isSupportingSendBeacon ? new SendBeaconMessage(opts) : new SendFetchMessage(opts, fetchRequestOptions);
    return new SendMessage(opts, BatchSendMessagerFactory.create(sendMessageExecuter, maxCounteUntil));
  }
}

export default SendMessageFactory;
