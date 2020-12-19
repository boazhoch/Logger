import { ILogFormatter, FormatType } from "./types";
import LogFormatter from "./LogFomatter";
import LogFormatterPrefixer from "@/LogFormatterPrefixer/LogFormatterPrefixer";
import LogFormatterSufixer from "@/LogFormatterSuffixer/LogFormatterSuffixer";

let prefixer: ILogFormatter;
let sufixer: ILogFormatter;
let formatter: ILogFormatter;

const prefix = "prefix";
const suffix = "suffix";
const sufixFn = jest.fn(() => suffix);
const prefixFn = jest.fn(() => prefix);

beforeAll(() => {
  prefixer = new LogFormatterPrefixer(prefixFn);
  sufixer = new LogFormatterSufixer(sufixFn);
});

test("Initialize LogFormatter", () => {
  formatter = new LogFormatter({ [FormatType.prefix]: prefixer, [FormatType.suffix]: sufixer });
  expect(formatter).toBeDefined();
});

test("To not format log 'message'", () => {
  formatter = new LogFormatter({});

  const result = formatter.format("message");

  expect(prefixFn).toBeCalledTimes(0);
  expect(sufixFn).toBeCalledTimes(0);

  expect(result).toEqual("message");
});

test("Format only with prefix", () => {
  formatter = new LogFormatter({ [FormatType.prefix]: prefixer });

  const result = formatter.format("message");

  expect(prefixFn).toBeCalledTimes(1);

  expect(result).toEqual(`${prefix}message`);
});

test("Format only with prefix", () => {
  formatter = new LogFormatter({ [FormatType.suffix]: sufixer });

  const result = formatter.format("message");

  expect(sufixFn).toBeCalledTimes(1);

  expect(result).toEqual(`message${suffix}`);
});

test("Format with prefix and suffix", () => {
  formatter = new LogFormatter({ [FormatType.suffix]: sufixer, [FormatType.prefix]: prefixer });

  const result = formatter.format("message");

  expect(sufixFn).toBeCalled();
  expect(prefixFn).toBeCalled();

  expect(result).toEqual(`${prefix}message${suffix}`);
});
