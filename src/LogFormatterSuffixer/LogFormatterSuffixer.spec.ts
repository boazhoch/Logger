import LogFormatterSuffixer from './LogFormatterSuffixer'

const sufixString = 'sufix'

const sufixFn = jest.fn(() => sufixString)

test('LogFormatterSuffixer format', () => {
  const formatter = new  LogFormatterSuffixer(sufixFn)

  expect(formatter).toBeInstanceOf(LogFormatterSuffixer)

  formatter.format('message')

  expect(sufixFn).toBeCalledTimes(1)
})