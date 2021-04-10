import LogFormatterPrefixer from "./LogFormatterPrefixer";

const prefixString = "prefix";

const prefixFn = jest.fn(() => prefixString);

test("LogFormatterPrefixer format", () => {
  const formatter = new LogFormatterPrefixer(prefixFn);

  expect(formatter).toBeInstanceOf(LogFormatterPrefixer);

  formatter.format("message");

  expect(prefixFn).toBeCalledTimes(1);
});
