import { AnyZodObject, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try{
    schema.parse({
        body: req.body,
        query: req.query,
        params: req.params
    })
  }catch(e: any){
    res.status(400).send(e.errors)
  }
}
