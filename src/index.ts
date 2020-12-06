import { ILogFormatteOptions } from './LogFormatter/types'
import { ISendMessage } from './SendMessage/types'
import { ITaggedLogger } from './TaggedLogger/types'
import { ISendMessageOptions } from './SendMessageOptions/types'
import Logger from './Logger/Logger'
import TemplateString from './TemplateString/TemplateString'
import JsonStriginifer from './Stringifier/Striginifer'
import { ILogger } from './Logger/types'
import TaggedLogger from './TaggedLogger/TaggedLogger'
import SendMessageFactory from './SendMessageFactory/SendMessageFactory'
import { IStrigify } from './Stringifier/types'
import LogFormatter, { logFormatterOptionsFcatory } from './LogFormatter/LogFomatter'

interface MyNamespacedWindow extends Window {
  logger: ILogger
}

declare let window: MyNamespacedWindow

let taggedLogger: ITaggedLogger

export default (
  {
    sendMessageOptions, 
    logSender = SendMessageFactory.create(sendMessageOptions), 
    logFormmaterOptions,
    stringifier,
  }: {
    sendMessageOptions?: ISendMessageOptions 
    logSender: ISendMessage 
    logFormmaterOptions?: ILogFormatteOptions
    stringifier?: IStrigify
  },
  ): ITaggedLogger  => {
  
  // singleton
  if (taggedLogger) {
    taggedLogger.info`returning same instance of logger`
    return taggedLogger
  }

  const logger = new Logger(logSender)

  taggedLogger = new TaggedLogger(new TemplateString(stringifier || new JsonStriginifer()), logger, logFormmaterOptions && new LogFormatter(logFormatterOptionsFcatory(logFormmaterOptions)))
  
  window.logger = taggedLogger

  return taggedLogger
}