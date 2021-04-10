import { ISendMessage } from "@logger/sender";
import { IContextLogger } from "../ContextLogger/types";

export type ILogger = Pick<Console, "error" | "info" | "debug" | "log"> & IContextLogger & Pick<ISendMessage, "flush">;
