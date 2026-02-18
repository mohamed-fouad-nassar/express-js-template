import httpStatus from "../utils/http-status.js";

export default (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.userRole))
      return res.status(403).json({
        status: httpStatus.FAIL,
        message: "You do not have permission to perform this action",
      });
    next();
  };
