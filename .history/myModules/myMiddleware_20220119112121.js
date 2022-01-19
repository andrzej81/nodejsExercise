// custom middleware create
exports.LoggerMiddleware = (req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });

  console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`);
  next();
};
