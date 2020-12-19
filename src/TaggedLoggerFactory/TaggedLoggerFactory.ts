import { ILogFormatteOptions } from '../LogFormatter/types'
import { ISendMessage } from '../SendMessage/types'
import { ITaggedLogger } from '../TaggedLogger/types'
import { ISendMessageOptions } from '../SendMessageOptions/types'
import Logger from '../Logger/Logger'
import TemplateString from '../TemplateString/TemplateString'
import JsonStriginifer from '../Stringifier/Striginifer'
import TaggedLogger from '../TaggedLogger/TaggedLogger'
import SendMessageFactory from '../SendMessageFactory/SendMessageFactory'
import { IStrigify } from '../Stringifier/types'
import LogFormatter from '../LogFormatter/LogFomatter'
import logFormatterOptionsFcatory from '../logFormatterFactory/logFormatterFactory'

let taggedLogger: ITaggedLogger | undefined = undefined

type LoggerFactoryParams = {
    sendMessageOptions?: ISendMessageOptions 
    logSender?: ISendMessage 
    logFormmaterOptions?: ILogFormatteOptions
    stringifier?: IStrigify
}

export default (params?: LoggerFactoryParams): ITaggedLogger  => {
  const logSender = params && params.logSender || SendMessageFactory.create(params?.sendMessageOptions)
  
  // singleton
  if (taggedLogger) {
    taggedLogger.info`returning same instance of logger`
    return taggedLogger
  }

  const logger = new Logger(logSender)

  const logFormatters = params?.logFormmaterOptions ? logFormatterOptionsFcatory(params?.logFormmaterOptions) : undefined

  taggedLogger = new TaggedLogger(new TemplateString(params?.stringifier || new JsonStriginifer()), logger, new LogFormatter(logFormatters))

  return taggedLogger
}
