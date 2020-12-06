import { IStrigify } from './types'

class JsonStriginifer implements IStrigify {
  strifigy(value: any) {
    if (!value) {
      return ''
    }
    const result = JSON.stringify(value, null ,1)
    if(!result) {
      console.warn("couldn't stringify: ", value)
      return ''
    }
    return result
  }
}

export default JsonStriginifer