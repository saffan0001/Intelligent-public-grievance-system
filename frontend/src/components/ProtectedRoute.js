// // src/components/ProtectedRoute.js
// import React from "react";
// import { Navigate } from "react-router-dom";
// import { getRole } from "../auth";

// function ProtectedRoute({ children, allow }) {
//   // allow: "user" | "admin"
//   const role = getRole();

//   if (!role) return <Navigate to="/select-login" replace />;
//   if (allow && role !== allow) return <Navigate to="/select-login" replace />;

//   return children;
// }

// export default ProtectedRoute;
import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn, getRole } from "../auth";

// allow = "user" | "admin"
export default function ProtectedRoute({ children, allow }) {
  if (!isLoggedIn()) return <Navigate to="/select-login" replace />;

  if (allow) {
    const role = getRole();
    if (role !== allow) return <Navigate to="/select-login" replace />;
  }

  return children;
}
