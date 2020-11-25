export type ILogger = Pick<Console, 'error' | 'info' | 'debug' | 'log'> & {
  taggedDebug(strings: TemplateStringsArray, ...values: any[]): void
  taggedInfo(strings: TemplateStringsArray, ...values: any[]): void
  taggedError(strings: TemplateStringsArray, ...values: any[]): void
  taggedLog(strings: TemplateStringsArray, ...values: any[]):void
}