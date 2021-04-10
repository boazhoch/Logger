import LogFormatter from "./LogFormatter/LogFomatter";
import logFormatterOptionsFcatory from "./logFormatterFactory/logFormatterFactory";
import { ILogFormatteOptions, ILogFormatter } from "./LogFormatter/types";

export { ILogFormatteOptions, logFormatterOptionsFcatory, ILogFormatter };

export default function logFormatter(logFormmaterOptions?: ILogFormatteOptions) {
  return new LogFormatter(logFormatterOptionsFcatory(logFormmaterOptions));
}
