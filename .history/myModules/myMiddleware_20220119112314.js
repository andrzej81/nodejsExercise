// custom middleware create
exports.LoggerMiddleware = (req, res, next) => {
  console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`);
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
  next();
};
