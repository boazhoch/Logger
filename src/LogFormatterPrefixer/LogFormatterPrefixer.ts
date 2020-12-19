import { ILogFormatter } from "@/LogFormatter/types";

class LogFormatterPrefixer implements ILogFormatter {
  constructor(private prefix: () => string) {}

  format(message: string) {
    return `${this.prefix()}${message}`;
  }
}

export default LogFormatterPrefixer;
