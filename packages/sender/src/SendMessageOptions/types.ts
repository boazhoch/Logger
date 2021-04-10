export interface ISendMessageOptions {
  urlEndpoint: string;
  headers: {
    [index: string]: string;
    contentType: string;
  };
}
