// validation ==> USING express-validator

import httpStatus from "../utils/http-status.js";
import { validationResult } from "express-validator";

export default (req, res, next) => {
  const errors = validationResult(req);
  // console.log("BODY:", req.body);

  if (errors.isEmpty()) return next();
  else {
    // console.log("ERRORS:", errors.array());
    return res.status(400).json({
      status: httpStatus.ERROR,
      data: { errors: errors.array().map((err) => err.msg) },
    });
  }
};
