// custom middleware create
exports.LoggerMiddleware = (req, res, next) => {
  console.log("Middleware 1");
  console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`);
  next();
};
