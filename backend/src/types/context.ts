import type { Request, Response } from "express";
import type { User } from "../entities/User";

export interface MyContext {
  req: Request;
  res: Response;
  user?: User | null;
  models: {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    User: any;
  };
}
