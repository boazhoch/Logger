import { ILogFormatter, FormatType } from './types'
import LogFormatter, {LogForrmatterPrefixer, LogForrmatterSuffixer } from './LogFomatter'


let prefixer: ILogFormatter
let sufixer: ILogFormatter
let formatter: ILogFormatter

const prefix = 'prefix'
const suffix = 'suffix'
const sufixFn =  jest.fn(() => suffix)
const prefixFn =  jest.fn(() => prefix)

beforeAll(() => {
  prefixer = new LogForrmatterPrefixer(prefixFn)
  sufixer = new LogForrmatterSuffixer(sufixFn)
  formatter = new LogFormatter({ [FormatType.prefix]:prefixer,[FormatType.suffix]:sufixer })
})

test('Initialize LogFormatter', () => {
  expect(formatter).toBeDefined()
})

