import { IContextLogger } from "@/ContextLogger/types";

export type ILogger = Pick<Console, "error" | "info" | "debug" | "log"> & IContextLogger;
