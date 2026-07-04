// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "../styles/Login.css";
// // import { loginAdmin } from "../auth";

// // function AdminLogin() {
// //   const navigate = useNavigate();

// //   const [adminId, setAdminId] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPass, setShowPass] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     const res = await loginAdmin(adminId.trim().toLowerCase(), password);

// //     if (res.ok) {
// //       navigate("/admin", { replace: true });
// //       return;
// //     }

// //     setError(res.error || "Invalid Admin credentials.");
// //   };

// //   return (
// //     <div className="loginPage">
// //       <div className="loginTopbar">
// //         <div className="loginBrand">
// //           <div className="brandIcon">PG</div>
// //           <div>
// //             <div className="brandTitle">Public Grievance System</div>
// //             <div className="brandSub">Admin Login</div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="loginWrap">
// //         <div className="loginCard">
// //           <h2 className="loginHeading">Admin Login</h2>
// //           <p className="loginHint">
// //             Use: saffan.admin@pgms.in / 123456 OR jeofrin.admin@pgms.in / 789456
// //           </p>

// //           {error && <div className="loginError">{error}</div>}

// //           <form onSubmit={handleLogin} className="loginForm">
// //             <label>Admin ID</label>
// //             <div className="inputWrap">
// //               <input
// //                 type="text"
// //                 placeholder="saffan.admin@pgms.in"
// //                 value={adminId}
// //                 onChange={(e) => setAdminId(e.target.value)}
// //               />
// //             </div>

// //             <label>Password</label>
// //             <div className="inputWrap">
// //               <input
// //                 type={showPass ? "text" : "password"}
// //                 placeholder="Enter password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //               />
// //               <button
// //                 type="button"
// //                 className="eyeBtn"
// //                 onClick={() => setShowPass((v) => !v)}
// //               >
// //                 {showPass ? "HIDE" : "SHOW"}
// //               </button>
// //             </div>

// //             <button className="btnPrimary" type="submit">
// //               Login
// //             </button>

// //             <button className="btnGhost" type="button" onClick={() => navigate("/login/user")}>
// //               ← Back to User Login
// //             </button>
// //           </form>
// //         </div>
// //       </div>

// //       <div className="loginFooter">© Public Grievance Redressal System — Demo Project</div>
// //     </div>
// //   );
// // }

// // export default AdminLogin;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Login.css";
// import { loginAdmin } from "../auth";

// function AdminLogin() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPass, setShowPass] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     const result = await loginAdmin({ email, password });

//     if (result.ok) {
//       navigate("/admin", { replace: true });
//       return;
//     }

//     setError(result.error || "Invalid Admin credentials.");
//   };

//   return (
//     <div className="loginPage">
//       <div className="loginTopbar">
//         <div className="loginBrand">
//           <div className="brandIcon">PG</div>
//           <div>
//             <div className="brandTitle">Public Grievance System</div>
//             <div className="brandSub">Admin Login</div>
//           </div>
//         </div>
//       </div>

//       <div className="loginWrap">
//         <div className="loginCard">
//           <h2 className="loginHeading">Admin Login</h2>
//           <p className="loginHint">Login to manage complaints & update status.</p>

//           {error && <div className="loginError">{error}</div>}

//           <form onSubmit={handleLogin} className="loginForm">
//             <label>Email</label>
//             <div className="inputWrap">
//               <input
//                 type="email"
//                 placeholder="saffan.admin@pgms.in"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 autoComplete="username"
//               />
//             </div>

//             <label>Password</label>
//             <div className="inputWrap">
//               <input
//                 type={showPass ? "text" : "password"}
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 autoComplete="current-password"
//               />
//               <button type="button" className="eyeBtn" onClick={() => setShowPass((v) => !v)}>
//                 {showPass ? "HIDE" : "SHOW"}
//               </button>
//             </div>

//             <button className="btnPrimary" type="submit">Login</button>

//             <button className="btnGhost" type="button" onClick={() => navigate("/login/user")}>
//               ← Back to User Login
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="loginFooter">© Public Grievance Redressal System — Demo Project</div>
//     </div>
//   );
// }

// export default AdminLogin;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { loginAdmin } from "../auth";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const result = await loginAdmin({ email, password });

    if (result.ok) {
      navigate("/admin", { replace: true });
      return;
    }

    setError(result.error || "Invalid Admin credentials.");
  };

  return (
    <div className="loginPage">
      <div className="loginTopbar">
        <div className="loginBrand">
          <div className="brandIcon">PG</div>
          <div>
            <div className="brandTitle">Public Grievance System</div>
            <div className="brandSub">Admin Login</div>
          </div>
        </div>
      </div>

      <div className="loginWrap">
        <div className="loginCard">
          <h2 className="loginHeading">Admin Login</h2>
          <p className="loginHint">Login to manage complaints & update status.</p>

          {error && <div className="loginError">{error}</div>}

          <form onSubmit={handleLogin} className="loginForm">
            <label>Email</label>
            <div className="inputWrap">
              <input
                type="email"
                placeholder="saffan.admin@pgms.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
              />
            </div>

            <label>Password</label>
            <div className="inputWrap">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button type="button" className="eyeBtn" onClick={() => setShowPass((v) => !v)}>
                {showPass ? "HIDE" : "SHOW"}
              </button>
            </div>

            <button className="btnPrimary" type="submit">
              Login
            </button>

            <button className="btnGhost" type="button" onClick={() => navigate("/login/user")}>
              ← Back to User Login
            </button>
          </form>
        </div>
      </div>

      <div className="loginFooter">© Public Grievance Redressal System — Demo Project</div>
    </div>
  );
}

export default AdminLogin;
