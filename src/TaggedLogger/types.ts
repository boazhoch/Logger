export type ITaggedLogger = {
  debug(strings: TemplateStringsArray, ...values: any[]): void;
  info(strings: TemplateStringsArray, ...values: any[]): void;
  error(strings: TemplateStringsArray, ...values: any[]): void;
  log(strings: TemplateStringsArray, ...values: any[]): void;
};
