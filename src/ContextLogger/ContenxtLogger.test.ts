import ContextLogger from './ContextLogger'
import { IContextLogger, LogLevel } from './types'

let contextLogger: IContextLogger

beforeAll(() => {
  contextLogger = new ContextLogger()
})

test('Initialize ContextLogger', () => {
  expect(contextLogger).toBeDefined()
})

test('Get init log level', () => {
  expect(contextLogger.getLogLevel()).toBe(LogLevel.debug)
})

test('Set log level', () => {
  const logLevel = LogLevel.error
  contextLogger.setLogLevel(logLevel)
  expect(contextLogger.getLogLevel()).toBe(logLevel)
})