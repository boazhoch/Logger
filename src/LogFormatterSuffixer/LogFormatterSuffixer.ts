import { ILogFormatter } from "@/LogFormatter/types";

class LogFormatterSufixer implements ILogFormatter {
  constructor(private suffix: () => string) {}

  format(message: string) {
    return `${message}${this.suffix()}`;
  }
}

export default LogFormatterSufixer;
