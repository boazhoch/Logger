import Logger from './Logger/Logger'
import TemplateString from './TemplateString/TemplateString'
import JsonStriginifer from './Stringifier/Striginifer'
import { ILogger } from './Logger/types'
import TaggedLogger from './TaggedLogger/TaggedLogger'
import SendMessageFactory from './SendMessageFactory/SendMessageFactory'

interface MyNamespacedWindow extends Window {
  logger: ILogger
}

declare let window: MyNamespacedWindow

const logSender = SendMessageFactory.create()

const logger = new Logger(logSender)
const taggedLogger = new TaggedLogger(new TemplateString(new JsonStriginifer()), logger)
window.logger = taggedLogger

/** 
 * @example 
*/
const a = {
  app: {
    name: 'my',
  },
}

taggedLogger.log`debug message ${a}`
taggedLogger.log`tagged simple debug`
// End example

// export default logger
