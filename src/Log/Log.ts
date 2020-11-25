import { ILog } from './types'

/**
 *
 *
 * @class Log
 * @implements {ILog}
 */
class Log implements ILog {
  private sendMsg: (m: string, ...optionalParams: any[]) => void;

  constructor(urlEndpoint: string, reqOptions?: RequestInit){
    if (navigator.sendBeacon) {
      this.sendMsg = (m: string, ...optionalParams: any[]) => {
        const data = new Blob([m], {type: 'text/plain'})
        navigator.sendBeacon(urlEndpoint, data)
      }
      return
    } 

    this.sendMsg = (m: string, ...optionalParams: any[]) => fetch(urlEndpoint, { 
      method: 'POST', 
      credentials: 'include', 
      cache: 'no-cache', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json',
      },
      ...reqOptions,
      body: JSON.stringify(m),
    })
  }

  /**
   *
   * 
   * @param {string} message
   * @param {...any[]} optionalParams
   * @memberof Log
   */
  send(message: string, ...optionalParams: any[]) {
    this.sendMsg(message,...optionalParams)
  }
}

export default Log