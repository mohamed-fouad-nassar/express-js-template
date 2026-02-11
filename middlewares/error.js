export default (err, _, res, __) =>
  res
    .status(err.message)
    .json({ message: err.message || "Internal Server Error" });
