import Logger from './Logger/Logger'
import Log from './Log/Log'
import TemplateString from './TemplateString/TemplateString'
import JsonStriginifer from './Stringifier/Striginifer'
import { ILogger } from './Logger/types'

interface MyNamespacedWindow extends Window {
  logger: ILogger
}

declare let window: MyNamespacedWindow

const logger = new Logger(new Log('/message'), new TemplateString(new JsonStriginifer()))
window.logger = logger

/** 
 * @example 
*/
const a = {
  app: {
    name: 'my',
  },
}

logger.taggedDebug`debug message ${a}`
// End example

// export default logger
