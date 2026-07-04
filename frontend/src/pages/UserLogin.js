// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import "../styles/Login.css";
// // // import { loginUser } from "../auth";

// // // function UserLogin() {
// // //   const navigate = useNavigate();
// // //   const [userId, setUserId] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [showPass, setShowPass] = useState(false);
// // //   const [error, setError] = useState("");

// // //   const normalizeUserId = (value) => {
// // //     const v = (value || "").trim();
// // //     if (!v) return "";
// // //     if (!v.includes("@")) return `${v}@pgms.in`;
// // //     return v.toLowerCase();
// // //   };

// // //   const handleLogin = async (e) => {
// // //     e.preventDefault();
// // //     setError("");

// // //     const finalUserId = normalizeUserId(userId);

// // //     const res = await loginUser(finalUserId, password);
// // //     if (!res.ok) {
// // //       setError(res.error || "Invalid User ID or password.");
// // //       return;
// // //     }

// // //     navigate("/home", { replace: true });
// // //   };

// // //   return (
// // //     <div className="loginPage">
// // //       <div className="loginTopbar">
// // //         <div className="loginBrand">
// // //           <div className="brandIcon">PG</div>
// // //           <div>
// // //             <div className="brandTitle">Public Grievance System</div>
// // //             <div className="brandSub">User Login</div>
// // //           </div>
// // //         </div>

// // //         <button className="cornerBtn" type="button" onClick={() => navigate("/login/admin")}>
// // //           Admin Login
// // //         </button>
// // //       </div>

// // //       <div className="loginWrap">
// // //         <div className="loginCard">
// // //           <h2 className="loginHeading">User Login</h2>
// // //           <p className="loginHint">Login using your created User ID.</p>

// // //           {error && <div className="loginError">{error}</div>}

// // //           <form onSubmit={handleLogin} className="loginForm">
// // //             <label>User ID</label>
// // //             <input
// // //               type="text"
// // //               placeholder="Eg: mohammed.saffan@pgms.in"
// // //               value={userId}
// // //               onChange={(e) => setUserId(e.target.value)}
// // //             />

// // //             <label>Password</label>
// // //             <div className="inputWrap">
// // //               <input
// // //                 type={showPass ? "text" : "password"}
// // //                 placeholder="Enter password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //               />
// // //               <button
// // //                 type="button"
// // //                 className="eyeBtn"
// // //                 onClick={() => setShowPass((v) => !v)}
// // //               >
// // //                 {showPass ? "HIDE" : "SHOW"}
// // //               </button>
// // //             </div>

// // //             <button className="btnPrimary" type="submit">
// // //               Login
// // //             </button>

// // //             <button className="btnLink" type="button" onClick={() => navigate("/forgot-password")}>
// // //               Forgot Password?
// // //             </button>

// // //             <button className="btnGhost" type="button" onClick={() => navigate("/create-id")}>
// // //               ← Create New ID
// // //             </button>
// // //           </form>
// // //         </div>
// // //       </div>

// // //       <div className="loginFooter">© Public Grievance Redressal System — Demo Project</div>
// // //     </div>
// // //   );
// // // }

// // // export default UserLogin;
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "../styles/Login.css";
// // import { loginUser } from "../auth";

// // function UserLogin() {
// //   const navigate = useNavigate();
// //   const [userId, setUserId] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPass, setShowPass] = useState(false);
// //   const [error, setError] = useState("");

// //   const normalizeUserId = (value) => {
// //     const v = (value || "").trim().toLowerCase();
// //     if (!v) return "";
// //     if (!v.includes("@")) return `${v}@pgms.in`;
// //     return v;
// //   };

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     const finalUserId = normalizeUserId(userId);

// //     const res = await loginUser(finalUserId, password);
// //     if (!res.ok) {
// //       setError(res.error || "Invalid User ID or password.");
// //       return;
// //     }

// //     navigate("/home", { replace: true });
// //   };

// //   return (
// //     <div className="loginPage">
// //       <div className="loginTopbar">
// //         <div className="loginBrand">
// //           <div className="brandIcon">PG</div>
// //           <div>
// //             <div className="brandTitle">Public Grievance System</div>
// //             <div className="brandSub">User Login</div>
// //           </div>
// //         </div>

// //         <button className="cornerBtn" type="button" onClick={() => navigate("/login/admin")}>
// //           Admin Login
// //         </button>
// //       </div>

// //       <div className="loginWrap">
// //         <div className="loginCard">
// //           <h2 className="loginHeading">User Login</h2>
// //           <p className="loginHint">Login using your created User ID.</p>

// //           {error && <div className="loginError">{error}</div>}

// //           <form onSubmit={handleLogin} className="loginForm">
// //             <label>User ID</label>
// //             <input
// //               type="text"
// //               placeholder="Eg: abdul.sadik@pgms.in"
// //               value={userId}
// //               onChange={(e) => setUserId(e.target.value)}
// //             />

// //             <label>Password</label>
// //             <div className="inputWrap">
// //               <input
// //                 type={showPass ? "text" : "password"}
// //                 placeholder="Enter password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //               />
// //               <button type="button" className="eyeBtn" onClick={() => setShowPass((v) => !v)}>
// //                 {showPass ? "HIDE" : "SHOW"}
// //               </button>
// //             </div>

// //             <button className="btnPrimary" type="submit">Login</button>

// //             <button className="btnLink" type="button" onClick={() => navigate("/forgot-password")}>
// //               Forgot Password?
// //             </button>

// //             <button className="btnGhost" type="button" onClick={() => navigate("/create-id")}>
// //               ← Create New ID
// //             </button>
// //           </form>
// //         </div>
// //       </div>

// //       <div className="loginFooter">© Public Grievance Redressal System — Demo Project</div>
// //     </div>
// //   );
// // }

// // export default UserLogin;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Login.css";
// import { loginUser } from "../auth";

// function UserLogin() {
//   const navigate = useNavigate();
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPass, setShowPass] = useState(false);
//   const [error, setError] = useState("");

//   const normalizeUserId = (value) => {
//     const v = (value || "").trim();
//     if (!v) return "";
//     return v.includes("@") ? v : `${v}@pgms.in`;
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     const finalUserId = normalizeUserId(userId);

//     const res = await loginUser({ userId: finalUserId, password });
//     if (!res.ok) {
//       setError(res.error || "Invalid User ID or password.");
//       return;
//     }

//     navigate("/home", { replace: true });
//   };

//   return (
//     <div className="loginPage">
//       <div className="loginTopbar">
//         <div className="loginBrand">
//           <div className="brandIcon">PG</div>
//           <div>
//             <div className="brandTitle">Public Grievance System</div>
//             <div className="brandSub">User Login</div>
//           </div>
//         </div>

//         <button className="cornerBtn" type="button" onClick={() => navigate("/login/admin")}>
//           Admin Login
//         </button>
//       </div>

//       <div className="loginWrap">
//         <div className="loginCard">
//           <h2 className="loginHeading">User Login</h2>
//           <p className="loginHint">Login using your created User ID.</p>

//           {error && <div className="loginError">{error}</div>}

//           <form onSubmit={handleLogin} className="loginForm">
//             <label>User ID</label>
//             <input
//               type="text"
//               placeholder="Eg: abdul.sadik@pgms.in"
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//               autoComplete="username"
//             />

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

//             <button className="btnLink" type="button" onClick={() => navigate("/forgot-password")}>
//               Forgot Password?
//             </button>

//             <button className="btnGhost" type="button" onClick={() => navigate("/create-id")}>
//               ← Create New ID
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="loginFooter">© Public Grievance Redressal System — Demo Project</div>
//     </div>
//   );
// }

// export default UserLogin;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { loginUser } from "../auth";

function UserLogin() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const normalizeUserId = (value) => {
    const v = (value || "").trim();
    if (!v) return "";
    if (!v.includes("@")) return `${v}@pgms.in`;
    return v;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const finalUserId = normalizeUserId(userId);

    const res = await loginUser({ userId: finalUserId, password });
    if (!res.ok) {
      setError(res.error || "Invalid User ID or password.");
      return;
    }

    navigate("/home", { replace: true });
  };

  return (
    <div className="loginPage">
      <div className="loginTopbar">
        <div className="loginBrand">
          <div className="brandIcon">PG</div>
          <div>
            <div className="brandTitle">Public Grievance System</div>
            <div className="brandSub">User Login</div>
          </div>
        </div>

        <button className="cornerBtn" type="button" onClick={() => navigate("/login/admin")}>
          Admin Login
        </button>
      </div>

      <div className="loginWrap">
        <div className="loginCard">
          <h2 className="loginHeading">User Login</h2>
          <p className="loginHint">Login using your created User ID.</p>

          {error && <div className="loginError">{error}</div>}

          <form onSubmit={handleLogin} className="loginForm">
            <label>User ID</label>
            <input
              type="text"
              placeholder="Eg: abdul.sadik@pgms.in"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              autoComplete="username"
            />

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

            <button className="btnLink" type="button" onClick={() => navigate("/forgot-password")}>
              Forgot Password?
            </button>

            <button className="btnGhost" type="button" onClick={() => navigate("/create-id")}>
              ← Create New ID
            </button>
          </form>
        </div>
      </div>

      <div className="loginFooter">© Public Grievance Redressal System — Demo Project</div>
    </div>
  );
}

export default UserLogin;
