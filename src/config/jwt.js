// yarn add jsonwebtoken
import jwt from "jsonwebtoken";

// tạo token
export const createToken = (data) => {
  return jwt.sign({ data: data }, "BI_MAT", { expiresIn: "5y" });
};
// kiểm tra token
// export const checkToken = (token) => {
//   return jwt.verify(token, "BI_MAT", (error) => {
//     return error;
//   });
// };
export const checkToken = (token) =>
  jwt.verify(token, "BI_MAT", (error) => error);
// giải mã token
export const decodeToken = (token) => {
  return jwt.decode(token);
};
// create refresh token
export const createTokenRef = (data) => {
  return jwt.sign({ data: data }, "BI_MAT_REF", { expiresIn: "60d" });
};
export const checkTokenRef = (token) =>
  jwt.verify(token, "BI_MAT_REF", (error) => error);
//
export const verifyToken = (req, res, next) => {
  let { token } = req.headers;
  // check token
  if (checkToken(token) == null) {
    next();
    return;
  }

  res.status(401).send(error.name);
};
