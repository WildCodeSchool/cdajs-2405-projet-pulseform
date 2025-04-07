import type { Request, Response } from "express";
import type { User } from "../entities/User";

export interface MyContext {
  req: Request;
  res: Response;
  user?: User | null;
  models: {
    User: typeof User;
  };
}
