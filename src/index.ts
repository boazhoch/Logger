import Logger from './Logger/Logger'
import Log from './Log/Log'
import TemplateString from './TemplateString/TemplateString'
import JsonStriginifer from './Stringifier/Striginifer'
import { ILogger } from './Logger/types'
import TaggedLogger from './TaggedLogger/TaggedLogger'

interface MyNamespacedWindow extends Window {
  logger: ILogger
}

declare let window: MyNamespacedWindow

const logger = new Logger(new Log('/message'))
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
