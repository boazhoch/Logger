import LogFormatterPrefixer from "../LogFormatterPrefixer/LogFormatterPrefixer";
import LogFormatterSufixer from "../LogFormatterSuffixer/LogFormatterSuffixer";

import { FormatType } from "./../LogFormatter/types";
import logFormatterFactory from "./logFormatterFactory";

const sufixFn = () => "sufix";
const prefixFn = () => "prefix";

test("Only create a prefix fomatter", () => {
  const configs = logFormatterFactory({ [FormatType.prefix]: prefixFn });
  expect(configs[FormatType.prefix]).toBeInstanceOf(LogFormatterPrefixer);
});

test("Only create a sufix fomatter", () => {
  const configs = logFormatterFactory({ [FormatType.suffix]: sufixFn });
  expect(configs[FormatType.suffix]).toBeInstanceOf(LogFormatterSufixer);
});

test("To create both formatters", () => {
  const configs = logFormatterFactory({ [FormatType.prefix]: prefixFn, [FormatType.suffix]: sufixFn });
  expect(configs[FormatType.prefix]).toBeInstanceOf(LogFormatterPrefixer);
  expect(configs[FormatType.suffix]).toBeInstanceOf(LogFormatterSufixer);
});

test("To return empty formatters config", () => {
  const configs = logFormatterFactory({});
  expect(configs).toEqual({});
});
