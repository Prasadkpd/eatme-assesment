import { Request, Response } from 'express';
import { AnyZodObject } from "zod";

export const validate = (schema: AnyZodObject) => (req: Request, res: Response) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params
    });
  } catch (e: any) {
    res.status(400).send(e.errors);
  }
};
