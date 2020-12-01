import { ITaggedLogger } from './TaggedLogger/types'
import { ISendMessageOptions } from './SendMessageOptions/types'
import Logger from './Logger/Logger'
import TemplateString from './TemplateString/TemplateString'
import JsonStriginifer from './Stringifier/Striginifer'
import { ILogger } from './Logger/types'
import TaggedLogger from './TaggedLogger/TaggedLogger'
import SendMessageFactory from './SendMessageFactory/SendMessageFactory'
import { IStrigify } from './Stringifier/types'

interface MyNamespacedWindow extends Window {
  logger: ILogger
}

declare let window: MyNamespacedWindow

let taggedLogger: ITaggedLogger

export default (opts?: ISendMessageOptions, stringifier?: IStrigify): ITaggedLogger  => {
  // singleton
  if (taggedLogger) {
    return taggedLogger
  }

  const logSender = SendMessageFactory.create(opts)

  const logger = new Logger(logSender)

  taggedLogger = new TaggedLogger(new TemplateString(stringifier || new JsonStriginifer()), logger)
  
  window.logger = taggedLogger

  return taggedLogger
}