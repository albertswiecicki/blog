// const bcrypt = require("bcryptjs");
// const hashIt = (password) => {
//   const hash = bcrypt.hashSync(password, process.env.REACT_APP_BCRYPT_SALT);
//   return hash;
// };
import { sha256 } from "js-sha256";

const hashIt = (password) => {
  return sha256(`${password}${process.env.REACT_APP_BCRYPT_SALT}`);
};
export default hashIt;
