// custom middleware create
exports.LoggerMiddleware2 = (req, res, next) => {
  console.log("Middleware 2");
  next();
};
