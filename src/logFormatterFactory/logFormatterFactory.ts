import { ILogFormatteOptions, ILogFormatterConfig, FormatType } from "@/LogFormatter/types";
import LogFormatterPrefixer from "@/LogFormatterPrefixer/LogFormatterPrefixer";
import LogFormatterSufixer from "@/LogFormatterSuffixer/LogFormatterSuffixer";

const logFormatterOptionsFcatory = (logFormmaterOptions: ILogFormatteOptions) => {
  const logFormatterConfig: ILogFormatterConfig = {} as ILogFormatterConfig;

  for (const option in logFormmaterOptions) {
    const item = logFormmaterOptions[(option as unknown) as FormatType];

    if (item) {
      if (((option as unknown) as FormatType) === FormatType.prefix) {
        logFormatterConfig[FormatType.prefix] = new LogFormatterPrefixer(item);
      }
      if (((option as unknown) as FormatType) === FormatType.suffix) {
        logFormatterConfig[FormatType.suffix] = new LogFormatterSufixer(item);
      }
    }
  }

  return logFormatterConfig;
};

export default logFormatterOptionsFcatory;
