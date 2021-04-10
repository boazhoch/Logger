export interface ILogFormatter {
  format(message: string): string;
}

export enum FormatType {
  suffix = "suffix",
  prefix = "prefix",
}

export type ILogFormatterConfig = {
  [key in FormatType]?: ILogFormatter;
};

export type ILogFormatteOptions = {
  [key in FormatType]?: () => string;
};
