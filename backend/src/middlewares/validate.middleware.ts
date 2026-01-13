import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

export const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (err: any) {
      next(
        new AppError(
          "Validation error",
          400,
          err.errors
        )
      );
    }
  };
