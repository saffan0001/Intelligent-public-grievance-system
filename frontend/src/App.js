// // // // // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // // // // import Navbar from "./components/Navbar";

// // // // // import GrievanceForm from "./pages/GrievanceForm";
// // // // // import UserDashboard from "./pages/UserDashboard";
// // // // // import AdminDashboard from "./pages/AdminDashboard";

// // // // // function App() {
// // // // //   return (
// // // // //     <BrowserRouter>
// // // // //       <div style={{ padding: "20px", background: "#f4f6f8", minHeight: "100vh" }}>
// // // // //         <Navbar />

// // // // //         <Routes>
// // // // //           <Route path="/" element={<GrievanceForm />} />
// // // // //           <Route path="/user" element={<UserDashboard />} />
// // // // //           <Route path="/admin" element={<AdminDashboard />} />
// // // // //         </Routes>
// // // // //       </div>
// // // // //     </BrowserRouter>
// // // // //   );
// // // // // }

// // // // // export default App;
// // // // import React from "react";
// // // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // // // import Login from "./pages/Login";
// // // // import GrievanceForm from "./pages/GrievanceForm";
// // // // import UserDashboard from "./pages/UserDashboard";
// // // // import AdminDashboard from "./pages/AdminDashboard";

// // // // import ProtectedRoute from "./components/ProtectedRoute";

// // // // function App() {
// // // //   return (
// // // //     <Router>
// // // //       <Routes>
// // // //         {/* Default route: go to login */}
// // // //         <Route path="/login" element={<Login />} />

// // // //         {/* Protected pages */}
// // // //         <Route
// // // //           path="/"
// // // //           element={
// // // //             <ProtectedRoute>
// // // //               <GrievanceForm />
// // // //             </ProtectedRoute>
// // // //           }
// // // //         />

// // // //         <Route
// // // //           path="/user"
// // // //           element={
// // // //             <ProtectedRoute>
// // // //               <UserDashboard />
// // // //             </ProtectedRoute>
// // // //           }
// // // //         />

// // // //         <Route
// // // //           path="/admin"
// // // //           element={
// // // //             <ProtectedRoute>
// // // //               <AdminDashboard />
// // // //             </ProtectedRoute>
// // // //           }
// // // //         />

// // // //         {/* Anything else */}
// // // //         <Route path="*" element={<Navigate to="/login" replace />} />
// // // //       </Routes>
// // // //     </Router>
// // // //   );
// // // // }

// // // // export default App;
// // // // src/App.js
// // // import React from "react";
// // // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // // import SelectLogin from "./pages/SelectLogin";
// // // import UserLogin from "./pages/UserLogin";
// // // import AdminLogin from "./pages/AdminLogin";

// // // import ProtectedRoute from "./components/ProtectedRoute";

// // // import GrievanceForm from "./pages/GrievanceForm"; // your home complaint page
// // // import UserDashboard from "./pages/UserDashboard";
// // // import AdminDashboard from "./pages/AdminDashboard";


// // // function App() {
// // //   return (
// // //     <BrowserRouter>
// // //       <Routes>
// // //         {/* Choose login */}
// // //         <Route path="/select-login" element={<SelectLogin />} />

// // //         {/* Individual logins */}
// // //         <Route path="/login/user" element={<UserLogin />} />
// // //         <Route path="/login/admin" element={<AdminLogin />} />

// // //         {/* Home (Complaint form) - user only */}
// // //         <Route
// // //           path="/"
// // //           element={
// // //             <ProtectedRoute allow="user">
// // //               <GrievanceForm />
// // //             </ProtectedRoute>
// // //           }
// // //         />

// // //         {/* User Dashboard - user only */}
// // //         <Route
// // //           path="/user-dashboard"
// // //           element={
// // //             <ProtectedRoute allow="user">
// // //               <UserDashboard />
// // //             </ProtectedRoute>
// // //           }
// // //         />

// // //         {/* Admin Dashboard - admin only */}
// // //         <Route
// // //           path="/admin"
// // //           element={
// // //             <ProtectedRoute allow="admin">
// // //               <AdminDashboard />
// // //             </ProtectedRoute>
// // //           }
// // //         />

// // //         {/* Default */}
// // //         <Route path="*" element={<SelectLogin />} />
// // //       </Routes>
// // //     </BrowserRouter>
// // //   );
// // // }

// // // export default App;
// // import React from "react";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // import CreateId from "./pages/CreateId";
// // import ForgotPassword from "./pages/ForgotPassword";
// // import UserLogin from "./pages/UserLogin";
// // import AdminLogin from "./pages/AdminLogin";
// // import ProtectedRoute from "./components/ProtectedRoute";

// // import GrievanceForm from "./pages/GrievanceForm";
// // import UserDashboard from "./pages/UserDashboard";
// // import AdminDashboard from "./pages/AdminDashboard";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         {/* ✅ First page */}
// //         <Route path="/" element={<CreateId />} />
// //         <Route path="/create-id" element={<CreateId />} />

// //         {/* Logins */}
// //         <Route path="/login/user" element={<UserLogin />} />
// //         <Route path="/forgot-password" element={<ForgotPassword />} />
// //         <Route path="/login/admin" element={<AdminLogin />} />

// //         {/* User Complaint Form (after login) */}
// //         <Route
// //           path="/home"
// //           element={
// //             <ProtectedRoute allow="user">
// //               <GrievanceForm />
// //             </ProtectedRoute>
// //           }
// //         />

// //         {/* User Dashboard */}
// //         <Route
// //           path="/user-dashboard"
// //           element={
// //             <ProtectedRoute allow="user">
// //               <UserDashboard />
// //             </ProtectedRoute>
// //           }
// //         />

// //         {/* Admin Dashboard */}
// //         <Route
// //           path="/admin"
// //           element={
// //             <ProtectedRoute allow="admin">
// //               <AdminDashboard />
// //             </ProtectedRoute>
// //           }
// //         />

// //         {/* Fallback */}
// //         <Route path="*" element={<CreateId />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;


// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import CreateId from "./pages/CreateId";
// import ForgotPassword from "./pages/ForgotPassword";
// import UserLogin from "./pages/UserLogin";
// import AdminLogin from "./pages/AdminLogin";

// import ProtectedRoute from "./components/ProtectedRoute";

// import GrievanceForm from "./pages/GrievanceForm";
// import UserDashboard from "./pages/UserDashboard";
// import AdminDashboard from "./pages/AdminDashboard";

// import { isLoggedIn, getRole } from "./auth";

// function App() {
//   // ✅ Smart landing page
//   const Landing = () => {
//     if (!isLoggedIn()) return <CreateId />;
//     const role = getRole();
//     if (role === "admin") return <Navigate to="/admin" replace />;
//     return <Navigate to="/home" replace />;
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* ✅ First page (smart redirect if already logged in) */}
//         <Route path="/" element={<Landing />} />

//         {/* Create ID */}
//         <Route path="/create-id" element={<CreateId />} />

//         {/* Logins */}
//         <Route path="/login/user" element={<UserLogin />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/login/admin" element={<AdminLogin />} />

//         {/* ✅ User Complaint Form (Home) */}
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute allow="user">
//               <GrievanceForm />
//             </ProtectedRoute>
//           }
//         />

//         {/* User Dashboard */}
//         <Route
//           path="/user-dashboard"
//           element={
//             <ProtectedRoute allow="user">
//               <UserDashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* Admin Dashboard */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute allow="admin">
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// src/pages/ForgotPassword.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateId from "./pages/CreateId";
import ForgotPassword from "./pages/ForgotPassword";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

import GrievanceForm from "./pages/GrievanceForm";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ DEFAULT PAGE = USER LOGIN */}
        <Route path="/" element={<UserLogin />} />
        <Route path="/login/user" element={<UserLogin />} />

        {/* Create ID */}
        <Route path="/create-id" element={<CreateId />} />

        {/* Forgot Password */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Admin Login */}
        <Route path="/login/admin" element={<AdminLogin />} />

        {/* USER HOME (after login) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute allow="user">
              <GrievanceForm />
            </ProtectedRoute>
          }
        />

        {/* User Dashboard */}
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute allow="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allow="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<UserLogin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
