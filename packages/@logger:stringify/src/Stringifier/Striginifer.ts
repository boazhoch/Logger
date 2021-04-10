import { IStrigify, StrinfigyValue } from "./types";

class JsonStriginifer implements IStrigify {
  private onError(warnMessage: string) {
    console.warn(warnMessage);
    return "";
  }

  strinfigy(value?: StrinfigyValue) {
    if (!value) {
      return this.onError("No value was passe to strinfigy, return ''");
    }

    if (typeof value === "string") {
      return value;
    }

    try {
      const result = JSON.stringify(value);
      return result;
    } catch (e) {
      return this.onError(`couldn't stringify: ${value}`);
    }
  }
}

export default JsonStriginifer;
