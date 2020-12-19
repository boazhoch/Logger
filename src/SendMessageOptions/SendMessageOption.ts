import { ISendMessageOptions } from "./types";

class SendMessageOptions implements ISendMessageOptions {
  public urlEndpoint = "/logs";
  public headers = {
    contentType: "text/plain",
  };
}

export default SendMessageOptions;
