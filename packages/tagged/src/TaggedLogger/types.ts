import { ISendMessage } from "@logger/sender";
import { IContextLogger } from "./../ContextLogger/types";
export type ITaggedLogger = {
  debug(strings: TemplateStringsArray, ...values: any[]): void;
  info(strings: TemplateStringsArray, ...values: any[]): void;
  error(strings: TemplateStringsArray, ...values: any[]): void;
  log(strings: TemplateStringsArray, ...values: any[]): void;
} & IContextLogger &
  Pick<ISendMessage, "flush">;
