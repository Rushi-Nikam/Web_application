const validate = (schema) => async (req, res, next) => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      return next();
    }catch (err) {
      const status = 422;
      const message = err.errors ?  err.errors[0].message:"Invalid request";
      const error = {
        status,
        message
      }
        console.log(message);
        next(error)  
    }
}
module.exports  = validate;