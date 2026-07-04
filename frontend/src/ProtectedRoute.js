// // import React from "react";
// // import { Navigate } from "react-router-dom";
// // import { isLoggedIn } from "../auth";

// // export default function ProtectedRoute({ children }) {
// //   if (!isLoggedIn()) return <Navigate to="/login" replace />;
// //   return children;
// // }
// import React from "react";
// import { Navigate } from "react-router-dom";
// import { isLoggedIn, getRole } from "../auth";

// export default function ProtectedRoute({ children, allow }) {
//   // Not logged in → go to role selection
//   if (!isLoggedIn()) {
//     return <Navigate to="/select-login" replace />;
//   }

//   // If role is required, verify it
//   if (allow) {
//     const role = getRole();

//     if (role !== allow) {
//       // Wrong role trying to access page
//       if (role === "admin") {
//         return <Navigate to="/admin" replace />;
//       } else {
//         return <Navigate to="/" replace />;
//       }
//     }
//   }

//   return children;
// }
import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn, getRole, logout } from "../auth";

export default function ProtectedRoute({ children, allow }) {
  // Not logged in → go to role selection
  if (!isLoggedIn()) {
    return <Navigate to="/select-login" replace />;
  }

  const role = getRole();

  // If role is missing/corrupted → reset auth and go to select login
  if (!role) {
    logout();
    return <Navigate to="/select-login" replace />;
  }

  // If role is required, verify it
  if (allow && role !== allow) {
    // Wrong role trying to access page → send them to their correct area
    if (role === "admin") {
      return <Navigate to="/admin" replace />;
    }
    return <Navigate to="/" replace />;
  }

  return children;
}
