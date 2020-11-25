export interface ILog {
  send(m: string, ...optionalParams: any[]): void
}