import { type Request, type Response, type NextFunction } from 'express'
import { ContactSchema } from 'shared'


export function validate(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const result = ContactSchema.safeParse(req.body)

  if (!result.success) {
    res.status(400).json({
      ok:     false,
      errors: result.error.flatten().fieldErrors,
    })
    return
  }

  res.locals.body = result.data
  next()
}