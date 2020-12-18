import { ILogger } from './Logger/types'

declare global {
  interface Window {
    logger: ILogger
  }
}