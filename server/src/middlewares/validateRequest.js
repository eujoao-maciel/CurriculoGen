export const validateRequest = (schema, source = 'body') => {
   return (req, res, next) => {
      const data = req[source]
      const result = schema.safeParse(data)

      if (!result.success) {
         const errors = result.error.issues.map((issue) => ({
            field: issue.path.join('.'),
            message: issue.message,
         }))

         return res.status(400).json({
            message: 'validation failed.',
            errors,
         })
      }

      req.validatedInputs = result.data

      next()
   }
}
