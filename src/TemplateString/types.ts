export interface ITemplateString {
  toString: TemplateStringFn<string>
}

export type TemplateStringFn<T> = (strings: TemplateStringsArray, ...values: unknown[]) => T
