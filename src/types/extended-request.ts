import { Request } from "express";

export type ExtendedRequest = Request & {
    userId?: number;
}