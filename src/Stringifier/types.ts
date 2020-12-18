export interface IStrigify {
  strinfigy(value?: StrinfigyValue): string
}

export type StrinfigyValue = string | Record<string | number, any>;
// export type StrinfigyValue = unknown;