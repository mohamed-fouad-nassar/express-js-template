export default (err, _, res, __) =>
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
