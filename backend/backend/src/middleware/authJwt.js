// const jwt = require("jsonwebtoken");

// module.exports = function authJwt(req, res, next) {
//   try {
//     const header = req.headers.authorization || "";
//     const token = header.startsWith("Bearer ") ? header.slice(7) : "";

//     if (!token) return res.status(401).json({ error: "No token" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // { role, user_id/admin_id, id }
//     next();
//   } catch (e) {
//     return res.status(401).json({ error: "Invalid/Expired token" });
//   }
// };

const jwt = require("jsonwebtoken");

module.exports = function authJwt(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";

  if (!token) return res.status(401).json({ error: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { user_id, role }
    next();
  } catch (e) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
