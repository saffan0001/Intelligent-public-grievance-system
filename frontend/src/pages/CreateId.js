// // // // // // // import React, { useMemo, useState } from "react";
// // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // import "../styles/Login.css";

// // // // // // // function CreateId() {
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const [name, setName] = useState("");
// // // // // // //   const [mobile, setMobile] = useState("");
// // // // // // //   const [error, setError] = useState("");

// // // // // // //   // Generate a stable ID once per render (only after submit we store it)
// // // // // // //   const generatedId = useMemo(() => {
// // // // // // //     const rand = Math.random().toString(36).substring(2, 8).toUpperCase();
// // // // // // //     const ts = Date.now().toString().slice(-6);
// // // // // // //     return `PGU-${ts}-${rand}`;
// // // // // // //   }, []);

// // // // // // //   const handleCreate = (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     setError("");

// // // // // // //     const digits = mobile.replace(/\D/g, "");
// // // // // // //     if (!name.trim() || digits.length !== 10) {
// // // // // // //       setError("Enter your name and valid 10-digit mobile number.");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     // Save to localStorage (so we can show on login page if you want)
// // // // // // //     localStorage.setItem(
// // // // // // //       "pg_user_profile",
// // // // // // //       JSON.stringify({
// // // // // // //         userId: generatedId,
// // // // // // //         name: name.trim(),
// // // // // // //         mobile: digits,
// // // // // // //         createdAt: new Date().toLocaleString(),
// // // // // // //       })
// // // // // // //     );

// // // // // // //     // Go to User Login page
// // // // // // //     navigate("/login/user", { replace: true });
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="loginPage">
// // // // // // //       {/* Topbar */}
// // // // // // //       <div className="loginTopbar">
// // // // // // //         <div className="loginBrand">
// // // // // // //           <div className="brandIcon">PG</div>
// // // // // // //           <div>
// // // // // // //             <div className="brandTitle">Public Grievance System</div>
// // // // // // //             <div className="brandSub">Create User ID</div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Center Card */}
// // // // // // //       <div className="loginWrap">
// // // // // // //         <div className="loginCard">
// // // // // // //           <h2 className="loginHeading">Create Your ID</h2>
// // // // // // //           <p className="loginHint">
// // // // // // //             Fill details to generate your User ID, then continue to login.
// // // // // // //           </p>

// // // // // // //           {error && <div className="loginError">{error}</div>}

// // // // // // //           <form className="loginForm" onSubmit={handleCreate}>
// // // // // // //             <label>Full Name</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Enter your name"
// // // // // // //               value={name}
// // // // // // //               onChange={(e) => setName(e.target.value)}
// // // // // // //             />

// // // // // // //             <label>Mobile Number</label>
// // // // // // //             <input
// // // // // // //               type="tel"
// // // // // // //               placeholder="Enter 10-digit mobile"
// // // // // // //               value={mobile}
// // // // // // //               onChange={(e) => setMobile(e.target.value)}
// // // // // // //               maxLength={10}
// // // // // // //             />

// // // // // // //             <div className="idBox">
// // // // // // //               <div className="idBoxLabel">Your User ID</div>
// // // // // // //               <div className="idBoxValue">{generatedId}</div>
// // // // // // //               <div className="idBoxHint">
// // // // // // //                 (This will be stored after you click Create ID)
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             <button className="btnPrimary" type="submit">
// // // // // // //               Create ID & Continue
// // // // // // //             </button>

// // // // // // //             <button
// // // // // // //               className="btnGhost"
// // // // // // //               type="button"
// // // // // // //               onClick={() => navigate("/login/admin")}
// // // // // // //               title="Admin? Go to Admin Login"
// // // // // // //             >
// // // // // // //               Admin Login →
// // // // // // //             </button>
// // // // // // //           </form>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div className="loginFooter">
// // // // // // //         © Public Grievance Redressal System — Demo Project
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default CreateId;
// // // // // // import React, { useMemo, useState } from "react";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import "../styles/Login.css";

// // // // // // function CreateId() {
// // // // // //   const navigate = useNavigate();

// // // // // //   const [firstName, setFirstName] = useState("");
// // // // // //   const [lastName, setLastName] = useState("");
// // // // // //   const [dob, setDob] = useState("");
// // // // // //   const [suggested, setSuggested] = useState([]);
// // // // // //   const [selectedId, setSelectedId] = useState("");
// // // // // //   const [error, setError] = useState("");

// // // // // //   const DOMAIN = "pgms.in"; // you can change to "gmail.com" style domain if you want

// // // // // //   const normalize = (s) =>
// // // // // //     (s || "")
// // // // // //       .trim()
// // // // // //       .toLowerCase()
// // // // // //       .replace(/[^a-z0-9]/g, "");

// // // // // //   const generateSuggestions = (fn, ln, dobStr) => {
// // // // // //     const f = normalize(fn);
// // // // // //     const l = normalize(ln);
// // // // // //     if (!f || !l || !dobStr) return [];

// // // // // //     // dob: YYYY-MM-DD
// // // // // //     const y = dobStr.slice(0, 4);
// // // // // //     const mm = dobStr.slice(5, 7);
// // // // // //     const dd = dobStr.slice(8, 10);
// // // // // //     const yy = y.slice(2);

// // // // // //     // email-id like suggestions
// // // // // //     const base = [
// // // // // //       `${f}.${l}`,
// // // // // //       `${f}${l}`,
// // // // // //       `${f}.${l}${yy}`,
// // // // // //       `${f}${l}${yy}`,
// // // // // //       `${f}${l}${dd}${mm}`,
// // // // // //       `${f}${l}${yy}${mm}`,
// // // // // //     ];

// // // // // //     // remove duplicates, add domain
// // // // // //     const uniq = Array.from(new Set(base)).slice(0, 6);
// // // // // //     return uniq.map((x) => `${x}@${DOMAIN}`);
// // // // // //   };

// // // // // //   const onCreateSuggestions = () => {
// // // // // //     setError("");
// // // // // //     if (!firstName || !lastName || !dob) {
// // // // // //       setSuggested([]);
// // // // // //       setSelectedId("");
// // // // // //       setError("Please fill First Name, Last Name and Date of Birth.");
// // // // // //       return;
// // // // // //     }
// // // // // //     const list = generateSuggestions(firstName, lastName, dob);
// // // // // //     setSuggested(list);
// // // // // //     setSelectedId(list[0] || "");
// // // // // //   };

// // // // // //   const onContinue = () => {
// // // // // //     setError("");

// // // // // //     if (!selectedId) {
// // // // // //       setError("Please generate and select a User ID first.");
// // // // // //       return;
// // // // // //     }

// // // // // //     // store profile locally (demo)
// // // // // //     const profile = {
// // // // // //       userId: selectedId,
// // // // // //       firstName: firstName.trim(),
// // // // // //       lastName: lastName.trim(),
// // // // // //       dob,
// // // // // //       createdAt: Date.now(),
// // // // // //     };

// // // // // //     localStorage.setItem("pg_user_profile", JSON.stringify(profile));

// // // // // //     // go to user login page
// // // // // //     navigate("/login/user", { replace: true });
// // // // // //   };

// // // // // //   const prettyDob = useMemo(() => {
// // // // // //     if (!dob) return "";
// // // // // //     // simple display: DD/MM/YYYY
// // // // // //     const y = dob.slice(0, 4);
// // // // // //     const m = dob.slice(5, 7);
// // // // // //     const d = dob.slice(8, 10);
// // // // // //     return `${d}/${m}/${y}`;
// // // // // //   }, [dob]);

// // // // // //   return (
// // // // // //     <div className="loginPage">
// // // // // //       {/* Topbar */}
// // // // // //       <div className="loginTopbar">
// // // // // //         <div className="loginBrand">
// // // // // //           <div className="brandIcon">PG</div>
// // // // // //           <div>
// // // // // //             <div className="brandTitle">Public Grievance System</div>
// // // // // //             <div className="brandSub">Create User ID</div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* optional corner button */}
// // // // // //         <button
// // // // // //           className="cornerBtn"
// // // // // //           type="button"
// // // // // //           onClick={() => navigate("/login/admin")}
// // // // // //           title="Admin Login"
// // // // // //         >
// // // // // //           Admin Login
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       <div className="loginWrap">
// // // // // //         <div className="loginCard">
// // // // // //           <h2 className="loginHeading">Create your User ID</h2>
// // // // // //           <p className="loginHint">
// // // // // //             Enter your details to generate a User ID (like creating an email ID).
// // // // // //           </p>

// // // // // //           {error && <div className="loginError">{error}</div>}

// // // // // //           <div className="loginForm">
// // // // // //             <label>First Name</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               placeholder="Eg: Saffan"
// // // // // //               value={firstName}
// // // // // //               onChange={(e) => setFirstName(e.target.value)}
// // // // // //             />

// // // // // //             <label>Last Name</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               placeholder="Eg: Mohammed"
// // // // // //               value={lastName}
// // // // // //               onChange={(e) => setLastName(e.target.value)}
// // // // // //             />

// // // // // //             <label>Date of Birth</label>
// // // // // //             <input
// // // // // //               type="date"
// // // // // //               value={dob}
// // // // // //               onChange={(e) => setDob(e.target.value)}
// // // // // //             />
// // // // // //             {dob && <div className="fieldHelp">Selected DOB: {prettyDob}</div>}

// // // // // //             <button className="btnPrimary" type="button" onClick={onCreateSuggestions}>
// // // // // //               Generate User ID
// // // // // //             </button>

// // // // // //             {/* Suggestions */}
// // // // // //             {suggested.length > 0 && (
// // // // // //               <div className="idBox">
// // // // // //                 <div className="idBoxLabel">Choose your User ID</div>

// // // // // //                 <div className="idList">
// // // // // //                   {suggested.map((id) => (
// // // // // //                     <label key={id} className="idItem">
// // // // // //                       <input
// // // // // //                         type="radio"
// // // // // //                         name="userId"
// // // // // //                         checked={selectedId === id}
// // // // // //                         onChange={() => setSelectedId(id)}
// // // // // //                       />
// // // // // //                       <span className="idText">{id}</span>
// // // // // //                     </label>
// // // // // //                   ))}
// // // // // //                 </div>

// // // // // //                 <div className="idBoxHint">
// // // // // //                   Tip: Pick the simplest one you like.
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             <button className="btnPrimary" type="button" onClick={onContinue}>
// // // // // //               Continue to Login →
// // // // // //             </button>

// // // // // //             <button
// // // // // //               className="btnGhost"
// // // // // //               type="button"
// // // // // //               onClick={() => navigate("/select-login")}
// // // // // //             >
// // // // // //               ← Back
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div className="loginFooter">
// // // // // //         © Public Grievance Redressal System — Demo Project
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default CreateId;
// // // // // import React, { useMemo, useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import "../styles/Login.css";
// // // // // import { createUser } from "../auth";

// // // // // function CreateId() {
// // // // //   const navigate = useNavigate();

// // // // //   const [firstName, setFirstName] = useState("");
// // // // //   const [lastName, setLastName] = useState("");
// // // // //   const [dob, setDob] = useState("");

// // // // //   const [suggested, setSuggested] = useState([]);
// // // // //   const [selectedId, setSelectedId] = useState("");

// // // // //   const [password, setPassword] = useState("");
// // // // //   const [confirm, setConfirm] = useState("");

// // // // //   const [error, setError] = useState("");
// // // // //   const [success, setSuccess] = useState("");

// // // // //   const DOMAIN = "pgms.in";

// // // // //   const normalize = (s) =>
// // // // //     (s || "")
// // // // //       .trim()
// // // // //       .toLowerCase()
// // // // //       .replace(/[^a-z0-9]/g, "");

// // // // //   const generateSuggestions = (fn, ln, dobStr) => {
// // // // //     const f = normalize(fn);
// // // // //     const l = normalize(ln);
// // // // //     if (!f || !l || !dobStr) return [];

// // // // //     const y = dobStr.slice(0, 4);
// // // // //     const mm = dobStr.slice(5, 7);
// // // // //     const dd = dobStr.slice(8, 10);
// // // // //     const yy = y.slice(2);

// // // // //     const base = [
// // // // //       `${f}.${l}`,
// // // // //       `${f}${l}`,
// // // // //       `${f}.${l}${yy}`,
// // // // //       `${f}${l}${yy}`,
// // // // //       `${f}${l}${dd}${mm}`,
// // // // //       `${f}.${l}${yy}${mm}`,
// // // // //     ];

// // // // //     const uniq = Array.from(new Set(base)).slice(0, 6);
// // // // //     return uniq.map((x) => `${x}@${DOMAIN}`);
// // // // //   };

// // // // //   const onGenerate = () => {
// // // // //     setError("");
// // // // //     setSuccess("");

// // // // //     if (!firstName || !lastName || !dob) {
// // // // //       setSuggested([]);
// // // // //       setSelectedId("");
// // // // //       setError("Fill First Name, Last Name, and Date of Birth.");
// // // // //       return;
// // // // //     }

// // // // //     const list = generateSuggestions(firstName, lastName, dob);
// // // // //     setSuggested(list);
// // // // //     setSelectedId(list[0] || "");
// // // // //   };

// // // // //   const validatePassword = (p) => {
// // // // //     // simple rules: min 6
// // // // //     return p.length >= 6;
// // // // //   };

// // // // //   const onCreateAccount = () => {
// // // // //     setError("");
// // // // //     setSuccess("");

// // // // //     if (!selectedId) {
// // // // //       setError("Generate and select a User ID first.");
// // // // //       return;
// // // // //     }
// // // // //     if (!password || !confirm) {
// // // // //       setError("Please create password and confirm it.");
// // // // //       return;
// // // // //     }
// // // // //     if (!validatePassword(password)) {
// // // // //       setError("Password must be at least 6 characters.");
// // // // //       return;
// // // // //     }
// // // // //     if (password !== confirm) {
// // // // //       setError("Passwords do not match.");
// // // // //       return;
// // // // //     }

// // // // //     const res = createUser({
// // // // //       userId: selectedId,
// // // // //       firstName: firstName.trim(),
// // // // //       lastName: lastName.trim(),
// // // // //       dob,
// // // // //       password,
// // // // //     });

// // // // //     if (!res.ok) {
// // // // //       setError(res.error);
// // // // //       return;
// // // // //     }

// // // // //     setSuccess("✅ Account created successfully. Continue to login.");
// // // // //     setTimeout(() => navigate("/login/user", { replace: true }), 900);
// // // // //   };

// // // // //   const prettyDob = useMemo(() => {
// // // // //     if (!dob) return "";
// // // // //     const y = dob.slice(0, 4);
// // // // //     const m = dob.slice(5, 7);
// // // // //     const d = dob.slice(8, 10);
// // // // //     return `${d}/${m}/${y}`;
// // // // //   }, [dob]);

// // // // //   return (
// // // // //     <div className="loginPage">
// // // // //       <div className="loginTopbar">
// // // // //         <div className="loginBrand">
// // // // //           <div className="brandIcon">PG</div>
// // // // //           <div>
// // // // //             <div className="brandTitle">Public Grievance System</div>
// // // // //             <div className="brandSub">Create Account</div>
// // // // //           </div>
// // // // //         </div>

// // // // //         <button className="cornerBtn" type="button" onClick={() => navigate("/login/admin")}>
// // // // //           Admin Login
// // // // //         </button>
// // // // //       </div>

// // // // //       <div className="loginWrap">
// // // // //         <div className="loginCard">
// // // // //           <h2 className="loginHeading">Create your User ID</h2>
// // // // //           <p className="loginHint">Create ID + set password (no email required).</p>

// // // // //           {error && <div className="loginError">{error}</div>}
// // // // //           {success && <div className="loginSuccess">{success}</div>}

// // // // //           <div className="loginForm">
// // // // //             <label>First Name</label>
// // // // //             <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Eg: Saffan" />

// // // // //             <label>Last Name</label>
// // // // //             <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Eg: Mohammed" />

// // // // //             <label>Date of Birth</label>
// // // // //             <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
// // // // //             {dob && <div className="fieldHelp">Selected DOB: {prettyDob}</div>}

// // // // //             <button className="btnPrimary" type="button" onClick={onGenerate}>
// // // // //               Generate User ID
// // // // //             </button>

// // // // //             {suggested.length > 0 && (
// // // // //               <div className="idBox">
// // // // //                 <div className="idBoxLabel">Choose your User ID</div>
// // // // //                 <div className="idList">
// // // // //                   {suggested.map((id) => (
// // // // //                     <label key={id} className="idItem">
// // // // //                       <input
// // // // //                         type="radio"
// // // // //                         name="userId"
// // // // //                         checked={selectedId === id}
// // // // //                         onChange={() => setSelectedId(id)}
// // // // //                       />
// // // // //                       <span className="idText">{id}</span>
// // // // //                     </label>
// // // // //                   ))}
// // // // //                 </div>
// // // // //                 <div className="idBoxHint">This ID will be used to login.</div>
// // // // //               </div>
// // // // //             )}

// // // // //             <label>Create Password</label>
// // // // //             <input
// // // // //               type="password"
// // // // //               placeholder="Minimum 6 characters"
// // // // //               value={password}
// // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // //             />

// // // // //             <label>Confirm Password</label>
// // // // //             <input
// // // // //               type="password"
// // // // //               placeholder="Re-enter password"
// // // // //               value={confirm}
// // // // //               onChange={(e) => setConfirm(e.target.value)}
// // // // //             />

// // // // //             <button className="btnPrimary" type="button" onClick={onCreateAccount}>
// // // // //               Create Account →
// // // // //             </button>

// // // // //           <button className="btnGhost" type="button" onClick={() => navigate("/login/user")}>
// // // // //   ← Back to Login
// // // // // </button>

// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="loginFooter">© Public Grievance Redressal System — Demo Project</div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default CreateId;
// // // // import React, { useMemo, useState } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import "../styles/Login.css";
// // // // import { createUser } from "../auth";

// // // // function CreateId() {
// // // //   const navigate = useNavigate();

// // // //   const [firstName, setFirstName] = useState("");
// // // //   const [lastName, setLastName] = useState("");
// // // //   const [dob, setDob] = useState("");

// // // //   const [suggested, setSuggested] = useState([]);
// // // //   const [selectedId, setSelectedId] = useState("");

// // // //   const [password, setPassword] = useState("");
// // // //   const [confirm, setConfirm] = useState("");

// // // //   const [error, setError] = useState("");
// // // //   const [success, setSuccess] = useState("");

// // // //   const DOMAIN = "pgms.in";

// // // //   const normalize = (s) =>
// // // //     (s || "")
// // // //       .trim()
// // // //       .toLowerCase()
// // // //       .replace(/[^a-z0-9]/g, "");

// // // //   const generateSuggestions = (fn, ln, dobStr) => {
// // // //     const f = normalize(fn);
// // // //     const l = normalize(ln);
// // // //     if (!f || !l || !dobStr) return [];

// // // //     const y = dobStr.slice(0, 4);
// // // //     const mm = dobStr.slice(5, 7);
// // // //     const dd = dobStr.slice(8, 10);
// // // //     const yy = y.slice(2);

// // // //     const base = [
// // // //       `${f}.${l}`,
// // // //       `${f}${l}`,
// // // //       `${f}.${l}${yy}`,
// // // //       `${f}${l}${yy}`,
// // // //       `${f}${l}${dd}${mm}`,
// // // //       `${f}.${l}${yy}${mm}`,
// // // //     ];

// // // //     const uniq = Array.from(new Set(base)).slice(0, 6);
// // // //     return uniq.map((x) => `${x}@${DOMAIN}`);
// // // //   };

// // // //   const onGenerate = () => {
// // // //     setError("");
// // // //     setSuccess("");

// // // //     if (!firstName || !lastName || !dob) {
// // // //       setSuggested([]);
// // // //       setSelectedId("");
// // // //       setError("Fill First Name, Last Name, and Date of Birth.");
// // // //       return;
// // // //     }

// // // //     const list = generateSuggestions(firstName, lastName, dob);
// // // //     setSuggested(list);
// // // //     setSelectedId(list[0] || "");
// // // //   };

// // // //   const onCreateAccount = () => {
// // // //     setError("");
// // // //     setSuccess("");

// // // //     if (!selectedId) {
// // // //       setError("Generate and select a User ID first.");
// // // //       return;
// // // //     }
// // // //     if (!password || !confirm) {
// // // //       setError("Please create password and confirm it.");
// // // //       return;
// // // //     }
// // // //     if (password.length < 6) {
// // // //       setError("Password must be at least 6 characters.");
// // // //       return;
// // // //     }
// // // //     if (password !== confirm) {
// // // //       setError("Passwords do not match.");
// // // //       return;
// // // //     }

// // // //     const res = createUser({
// // // //       userId: selectedId,
// // // //       firstName: firstName.trim(),
// // // //       lastName: lastName.trim(),
// // // //       dob,
// // // //       password,
// // // //     });

// // // //     if (!res.ok) {
// // // //       setError(res.error);
// // // //       return;
// // // //     }

// // // //     setSuccess("✅ Account created successfully. Continue to login.");
// // // //     setTimeout(() => navigate("/login/user", { replace: true }), 900);
// // // //   };

// // // //   const prettyDob = useMemo(() => {
// // // //     if (!dob) return "";
// // // //     const y = dob.slice(0, 4);
// // // //     const m = dob.slice(5, 7);
// // // //     const d = dob.slice(8, 10);
// // // //     return `${d}/${m}/${y}`;
// // // //   }, [dob]);

// // // //   return (
// // // //     <div className="loginPage">
// // // //       <div className="loginTopbar">
// // // //         <div className="loginBrand">
// // // //           <div className="brandIcon">PG</div>
// // // //           <div>
// // // //             <div className="brandTitle">Public Grievance System</div>
// // // //             <div className="brandSub">Create Account</div>
// // // //           </div>
// // // //         </div>

// // // //         <button
// // // //           className="cornerBtn"
// // // //           type="button"
// // // //           onClick={() => navigate("/login/admin")}
// // // //         >
// // // //           Admin Login
// // // //         </button>
// // // //       </div>

// // // //       <div className="loginWrap">
// // // //         <div className="loginCard">
// // // //           <h2 className="loginHeading">Create your User ID</h2>
// // // //           <p className="loginHint">Create ID + set password (no email required).</p>

// // // //           {error && <div className="loginError">{error}</div>}
// // // //           {success && <div className="loginSuccess">{success}</div>}

// // // //           <div className="loginForm">
// // // //             <label>First Name</label>
// // // //             <input
// // // //               value={firstName}
// // // //               onChange={(e) => setFirstName(e.target.value)}
// // // //               placeholder="Eg: Saffan"
// // // //             />

// // // //             <label>Last Name</label>
// // // //             <input
// // // //               value={lastName}
// // // //               onChange={(e) => setLastName(e.target.value)}
// // // //               placeholder="Eg: Mohammed"
// // // //             />

// // // //             <label>Date of Birth</label>
// // // //             <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
// // // //             {dob && <div className="fieldHelp">Selected DOB: {prettyDob}</div>}

// // // //             <button className="btnPrimary" type="button" onClick={onGenerate}>
// // // //               Generate User ID
// // // //             </button>

// // // //             {suggested.length > 0 && (
// // // //               <div className="idBox">
// // // //                 <div className="idBoxLabel">Choose your User ID</div>
// // // //                 <div className="idList">
// // // //                   {suggested.map((id) => (
// // // //                     <label key={id} className="idItem">
// // // //                       <input
// // // //                         type="radio"
// // // //                         name="userId"
// // // //                         checked={selectedId === id}
// // // //                         onChange={() => setSelectedId(id)}
// // // //                       />
// // // //                       <span className="idText">{id}</span>
// // // //                     </label>
// // // //                   ))}
// // // //                 </div>
// // // //                 <div className="idBoxHint">This ID will be used to login.</div>
// // // //               </div>
// // // //             )}

// // // //             <label>Create Password</label>
// // // //             <input
// // // //               type="password"
// // // //               placeholder="Minimum 6 characters"
// // // //               value={password}
// // // //               onChange={(e) => setPassword(e.target.value)}
// // // //             />

// // // //             <label>Confirm Password</label>
// // // //             <input
// // // //               type="password"
// // // //               placeholder="Re-enter password"
// // // //               value={confirm}
// // // //               onChange={(e) => setConfirm(e.target.value)}
// // // //             />

// // // //             <button className="btnPrimary" type="button" onClick={onCreateAccount}>
// // // //               Create Account →
// // // //             </button>

// // // //             {/* ✅ fixed back route */}
// // // //             <button
// // // //               className="btnGhost"
// // // //               type="button"
// // // //               onClick={() => navigate("/login/user")}
// // // //             >
// // // //               ← Back to Login
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="loginFooter">
// // // //         © Public Grievance Redressal System — Demo Project
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default CreateId;
// // // import React, { useMemo, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import "../styles/Login.css";
// // // import { createUser } from "../auth";

// // // function CreateId() {
// // //   const navigate = useNavigate();

// // //   const [firstName, setFirstName] = useState("");
// // //   const [lastName, setLastName] = useState("");

// // //   // ✅ New: Mobile number (+91)
// // //   const [mobile, setMobile] = useState(""); // store only 10 digits

// // //   // ✅ User can type own ID OR use generated suggestions
// // //   const [userId, setUserId] = useState("");

// // //   const [suggested, setSuggested] = useState([]);
// // //   const [selectedId, setSelectedId] = useState("");

// // //   const [password, setPassword] = useState("");
// // //   const [confirm, setConfirm] = useState("");

// // //   const [error, setError] = useState("");
// // //   const [success, setSuccess] = useState("");

// // //   const DOMAIN = "pgms.in";

// // //   const normalize = (s) =>
// // //     (s || "")
// // //       .trim()
// // //       .toLowerCase()
// // //       .replace(/[^a-z0-9]/g, "");

// // //   const isValidMobile = (digits10) => /^\d{10}$/.test(digits10);

// // //   const normalizeUserId = (raw) => {
// // //     const v = (raw || "").trim().toLowerCase();

// // //     // allow user to type just "saffan.mohammed" and we auto add domain
// // //     if (!v) return "";
// // //     if (v.includes("@")) return v;

// // //     const safe = v.replace(/\s+/g, ".").replace(/[^a-z0-9.]/g, "");
// // //     return `${safe}@${DOMAIN}`;
// // //   };

// // //   const isValidUserId = (id) => {
// // //     // simple email-like check
// // //     return /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(id);
// // //   };

// // //   const generateSuggestions = (fn, ln) => {
// // //     const f = normalize(fn);
// // //     const l = normalize(ln);
// // //     if (!f || !l) return [];

// // //     const base = [
// // //       `${f}.${l}`,
// // //       `${f}${l}`,
// // //       `${f}.${l}01`,
// // //       `${f}${l}01`,
// // //       `${f}.${l}2026`,
// // //       `${f}${l}2026`,
// // //     ];

// // //     const uniq = Array.from(new Set(base)).slice(0, 6);
// // //     return uniq.map((x) => `${x}@${DOMAIN}`);
// // //   };

// // //   const onGenerate = () => {
// // //     setError("");
// // //     setSuccess("");

// // //     if (!firstName || !lastName) {
// // //       setSuggested([]);
// // //       setSelectedId("");
// // //       setError("Fill First Name and Last Name first.");
// // //       return;
// // //     }

// // //     const list = generateSuggestions(firstName, lastName);
// // //     setSuggested(list);

// // //     const first = list[0] || "";
// // //     setSelectedId(first);
// // //     setUserId(first); // ✅ auto-fill input with generated id
// // //   };

// // //   const onPickSuggested = (id) => {
// // //     setSelectedId(id);
// // //     setUserId(id); // ✅ set input when user selects suggestion
// // //   };

// // //   const onCreateAccount = () => {
// // //     setError("");
// // //     setSuccess("");

// // //     // ✅ validations
// // //     if (!firstName.trim() || !lastName.trim()) {
// // //       setError("Please enter First Name and Last Name.");
// // //       return;
// // //     }

// // //     if (!isValidMobile(mobile)) {
// // //       setError("Enter valid Mobile Number (10 digits). Example: +91 9876543210");
// // //       return;
// // //     }

// // //     const finalUserId = normalizeUserId(userId);

// // //     if (!finalUserId) {
// // //       setError("Please enter your User ID or generate one.");
// // //       return;
// // //     }

// // //     if (!isValidUserId(finalUserId)) {
// // //       setError("User ID format is not valid. Example: saffan.mohammed@pgms.in");
// // //       return;
// // //     }

// // //     if (!password || !confirm) {
// // //       setError("Please create password and confirm it.");
// // //       return;
// // //     }

// // //     if (password.length < 6) {
// // //       setError("Password must be at least 6 characters.");
// // //       return;
// // //     }

// // //     if (password !== confirm) {
// // //       setError("Passwords do not match.");
// // //       return;
// // //     }

// // //     const res = createUser({
// // //       userId: finalUserId,
// // //       firstName: firstName.trim(),
// // //       lastName: lastName.trim(),
// // //       mobile: `+91${mobile}`, // ✅ store full
// // //       password,
// // //     });

// // //     if (!res.ok) {
// // //       setError(res.error);
// // //       return;
// // //     }

// // //     setSuccess("✅ Account created successfully. Continue to login.");
// // //     setTimeout(() => navigate("/login/user", { replace: true }), 900);
// // //   };

// // //   const mobilePretty = useMemo(() => {
// // //     if (!mobile) return "";
// // //     return `+91 ${mobile}`;
// // //   }, [mobile]);

// // //   return (
// // //     <div className="loginPage">
// // //       <div className="loginTopbar">
// // //         <div className="loginBrand">
// // //           <div className="brandIcon">PG</div>
// // //           <div>
// // //             <div className="brandTitle">Public Grievance System</div>
// // //             <div className="brandSub">Create Account</div>
// // //           </div>
// // //         </div>

// // //         <button
// // //           className="cornerBtn"
// // //           type="button"
// // //           onClick={() => navigate("/login/admin")}
// // //         >
// // //           Admin Login
// // //         </button>
// // //       </div>

// // //       <div className="loginWrap">
// // //         <div className="loginCard">
// // //           <h2 className="loginHeading">Create your User ID</h2>
// // //           <p className="loginHint">
// // //             Enter details → create your own ID or generate one → set password.
// // //           </p>

// // //           {error && <div className="loginError">{error}</div>}
// // //           {success && <div className="loginSuccess">{success}</div>}

// // //           <div className="loginForm">
// // //             <label>First Name</label>
// // //             <input
// // //               value={firstName}
// // //               onChange={(e) => setFirstName(e.target.value)}
// // //               placeholder="Eg: Saffan"
// // //             />

// // //             <label>Last Name</label>
// // //             <input
// // //               value={lastName}
// // //               onChange={(e) => setLastName(e.target.value)}
// // //               placeholder="Eg: Mohammed"
// // //             />

// // //             {/* ✅ Mobile (+91 mandatory) */}
// // //             <label>Mobile Number (India)</label>
// // //             <div className="inputWrap">
// // //               <input
// // //                 type="tel"
// // //                 inputMode="numeric"
// // //                 placeholder="+91 9876543210"
// // //                 value={mobilePretty}
// // //                 onChange={(e) => {
// // //                   // keep only digits, keep last 10 digits
// // //                   const digits = (e.target.value || "").replace(/\D/g, "");
// // //                   const last10 = digits.slice(-10);
// // //                   setMobile(last10);
// // //                 }}
// // //               />
// // //             </div>
// // //             <div className="fieldHelp">
// // //               Mandatory. We store it as +91XXXXXXXXXX.
// // //             </div>

// // //             {/* ✅ Generate button */}
// // //             <button className="btnPrimary" type="button" onClick={onGenerate}>
// // //               Generate User ID
// // //             </button>

// // //             {/* ✅ New: User ID input always shown under Generate */}
// // //             <label>User ID</label>
// // //             <input
// // //               type="text"
// // //               placeholder={`Eg: saffan.mohammed@${DOMAIN}`}
// // //               value={userId}
// // //               onChange={(e) => setUserId(e.target.value)}
// // //             />
// // //             <div className="fieldHelp">
// // //               You can type your own ID (we will add @pgms.in if you don’t type
// // //               domain).
// // //             </div>

// // //             {/* ✅ Suggested list (optional) */}
// // //             {suggested.length > 0 && (
// // //               <div className="idBox">
// // //                 <div className="idBoxLabel">Or choose from suggestions</div>
// // //                 <div className="idList">
// // //                   {suggested.map((id) => (
// // //                     <label key={id} className="idItem">
// // //                       <input
// // //                         type="radio"
// // //                         name="userIdPick"
// // //                         checked={selectedId === id}
// // //                         onChange={() => onPickSuggested(id)}
// // //                       />
// // //                       <span className="idText">{id}</span>
// // //                     </label>
// // //                   ))}
// // //                 </div>
// // //                 <div className="idBoxHint">
// // //                   Selecting a suggestion will fill the User ID box.
// // //                 </div>
// // //               </div>
// // //             )}

// // //             <label>Create Password</label>
// // //             <input
// // //               type="password"
// // //               placeholder="Minimum 6 characters"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //             />

// // //             <label>Confirm Password</label>
// // //             <input
// // //               type="password"
// // //               placeholder="Re-enter password"
// // //               value={confirm}
// // //               onChange={(e) => setConfirm(e.target.value)}
// // //             />

// // //             <button className="btnPrimary" type="button" onClick={onCreateAccount}>
// // //               Create Account →
// // //             </button>

// // //             <button
// // //               className="btnGhost"
// // //               type="button"
// // //               onClick={() => navigate("/login/user")}
// // //             >
// // //               ← Back to Login
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="loginFooter">© Public Grievance Redressal System — Demo Project</div>
// // //     </div>
// // //   );
// // // }

// // // export default CreateId;
// // import React, { useMemo, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "../styles/Login.css";
// // import { createUser } from "../auth";

// // function CreateId() {
// //   const navigate = useNavigate();

// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");

// //   // ✅ Mobile number (+91)
// //   const [mobile, setMobile] = useState(""); // store only 10 digits

// //   // ✅ NEW: Gmail (mandatory)
// //   const [gmail, setGmail] = useState("");

// //   // ✅ User can type own ID OR use generated suggestions
// //   const [userId, setUserId] = useState("");
// //   const [suggested, setSuggested] = useState([]);
// //   const [selectedId, setSelectedId] = useState("");

// //   const [password, setPassword] = useState("");
// //   const [confirm, setConfirm] = useState("");

// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState("");

// //   const DOMAIN = "pgms.in";

// //   const normalize = (s) =>
// //     (s || "")
// //       .trim()
// //       .toLowerCase()
// //       .replace(/[^a-z0-9]/g, "");

// //   const isValidMobile = (digits10) => /^\d{10}$/.test(digits10);

// //   // ✅ Gmail must be @gmail.com
// //   const isValidGmail = (email) => {
// //     const v = (email || "").trim().toLowerCase();
// //     return /^[a-z0-9._%+-]+@gmail\.com$/i.test(v);
// //   };

// //   const normalizeUserId = (raw) => {
// //     const v = (raw || "").trim().toLowerCase();
// //     if (!v) return "";
// //     if (v.includes("@")) return v;

// //     const safe = v.replace(/\s+/g, ".").replace(/[^a-z0-9.]/g, "");
// //     return `${safe}@${DOMAIN}`;
// //   };

// //   const isValidUserId = (id) => {
// //     return /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(id);
// //   };

// //   const generateSuggestions = (fn, ln) => {
// //     const f = normalize(fn);
// //     const l = normalize(ln);
// //     if (!f || !l) return [];

// //     const base = [
// //       `${f}.${l}`,
// //       `${f}${l}`,
// //       `${f}.${l}01`,
// //       `${f}${l}01`,
// //       `${f}.${l}2026`,
// //       `${f}${l}2026`,
// //     ];

// //     const uniq = Array.from(new Set(base)).slice(0, 6);
// //     return uniq.map((x) => `${x}@${DOMAIN}`);
// //   };

// //   const onGenerate = () => {
// //     setError("");
// //     setSuccess("");

// //     if (!firstName.trim() || !lastName.trim()) {
// //       setSuggested([]);
// //       setSelectedId("");
// //       setError("Fill First Name and Last Name first.");
// //       return;
// //     }

// //     const list = generateSuggestions(firstName, lastName);
// //     setSuggested(list);

// //     const first = list[0] || "";
// //     setSelectedId(first);
// //     setUserId(first);
// //   };

// //   const onPickSuggested = (id) => {
// //     setSelectedId(id);
// //     setUserId(id);
// //   };

// //   const onCreateAccount = () => {
// //     setError("");
// //     setSuccess("");

// //     if (!firstName.trim() || !lastName.trim()) {
// //       setError("Please enter First Name and Last Name.");
// //       return;
// //     }

// //     if (!isValidMobile(mobile)) {
// //       setError("Enter valid Mobile Number (10 digits). Example: +91 9876543210");
// //       return;
// //     }

// //     if (!isValidGmail(gmail)) {
// //       setError("Please enter a valid Gmail ID (example: yourname@gmail.com).");
// //       return;
// //     }

// //     const finalUserId = normalizeUserId(userId);

// //     if (!finalUserId) {
// //       setError("Please enter your User ID or generate one.");
// //       return;
// //     }

// //     if (!isValidUserId(finalUserId)) {
// //       setError(`User ID format is not valid. Example: saffan.mohammed@${DOMAIN}`);
// //       return;
// //     }

// //     if (!password || !confirm) {
// //       setError("Please create password and confirm it.");
// //       return;
// //     }

// //     if (password.length < 6) {
// //       setError("Password must be at least 6 characters.");
// //       return;
// //     }

// //     if (password !== confirm) {
// //       setError("Passwords do not match.");
// //       return;
// //     }

// //     const res = createUser({
// //       userId: finalUserId,
// //       firstName: firstName.trim(),
// //       lastName: lastName.trim(),
// //       mobile: `+91${mobile}`,
// //       gmail: gmail.trim().toLowerCase(), // ✅ store gmail
// //       password,
// //     });

// //     if (!res.ok) {
// //       setError(res.error);
// //       return;
// //     }

// //     setSuccess("✅ Account created successfully. Continue to login.");
// //     setTimeout(() => navigate("/login/user", { replace: true }), 900);
// //   };

// //   const mobilePretty = useMemo(() => {
// //     if (!mobile) return "";
// //     return `+91 ${mobile}`;
// //   }, [mobile]);

// //   return (
// //     <div className="loginPage">
// //       <div className="loginTopbar">
// //         <div className="loginBrand">
// //           <div className="brandIcon">PG</div>
// //           <div>
// //             <div className="brandTitle">Public Grievance System</div>
// //             <div className="brandSub">Create Account</div>
// //           </div>
// //         </div>

// //         <button className="cornerBtn" type="button" onClick={() => navigate("/login/admin")}>
// //           Admin Login
// //         </button>
// //       </div>

// //       <div className="loginWrap">
// //         <div className="loginCard">
// //           <h2 className="loginHeading">Create your User ID</h2>
// //           <p className="loginHint">
// //             Enter details → add Gmail → create your own ID or generate one → set password.
// //           </p>

// //           {error && <div className="loginError">{error}</div>}
// //           {success && <div className="loginSuccess">{success}</div>}

// //           <div className="loginForm">
// //             <label>First Name</label>
// //             <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Eg: Saffan" />

// //             <label>Last Name</label>
// //             <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Eg: Mohammed" />

// //             {/* ✅ Mobile (+91 mandatory) */}
// //             <label>Mobile Number (India)</label>

// // <div className="inputWrap" style={{ display: "flex", gap: 10, alignItems: "center" }}>
// //   <div
// //     style={{
// //       padding: "10px 12px",
// //       border: "1px solid rgba(0,0,0,0.12)",
// //       borderRadius: 10,
// //       background: "rgba(255,255,255,0.7)",
// //       fontWeight: 600,
// //       userSelect: "none",
// //     }}
// //   >
// //     +91
// //   </div>

// //   <input
// //     type="tel"
// //     inputMode="numeric"
// //     pattern="[0-9]*"
// //     placeholder="9876543210"
// //     value={mobile}
// //     onChange={(e) => {
// //       const digits = (e.target.value || "").replace(/\D/g, "");
// //       setMobile(digits.slice(0, 10)); // keep max 10 digits
// //     }}
// //     maxLength={10}
// //   />
// // </div>

// // <div className="fieldHelp">Mandatory. We store it as +91XXXXXXXXXX.</div>

// //             <div className="fieldHelp">Mandatory. We store it as +91XXXXXXXXXX.</div>

// //             {/* ✅ NEW Gmail */}
// //             <label>Gmail ID (Mandatory)</label>
// //             <input
// //               type="email"
// //               placeholder="Eg: saffan@gmail.com"
// //               value={gmail}
// //               onChange={(e) => setGmail(e.target.value)}
// //             />
// //             <div className="fieldHelp">Mandatory. Must be a valid @gmail.com address.</div>

// //             {/* ✅ Generate button */}
// //             <button className="btnPrimary" type="button" onClick={onGenerate}>
// //               Generate User ID
// //             </button>

// //             {/* ✅ User ID input */}
// //             <label>User ID</label>
// //             <input
// //               type="text"
// //               placeholder={`Eg: saffan.mohammed@${DOMAIN}`}
// //               value={userId}
// //               onChange={(e) => setUserId(e.target.value)}
// //             />
// //             <div className="fieldHelp">
// //               You can type your own ID (we will add @{DOMAIN} if you don’t type domain).
// //             </div>

// //             {/* ✅ Suggested list */}
// //             {suggested.length > 0 && (
// //               <div className="idBox">
// //                 <div className="idBoxLabel">Or choose from suggestions</div>
// //                 <div className="idList">
// //                   {suggested.map((id) => (
// //                     <label key={id} className="idItem">
// //                       <input
// //                         type="radio"
// //                         name="userIdPick"
// //                         checked={selectedId === id}
// //                         onChange={() => onPickSuggested(id)}
// //                       />
// //                       <span className="idText">{id}</span>
// //                     </label>
// //                   ))}
// //                 </div>
// //                 <div className="idBoxHint">Selecting a suggestion will fill the User ID box.</div>
// //               </div>
// //             )}

// //             <label>Create Password</label>
// //             <input
// //               type="password"
// //               placeholder="Minimum 6 characters"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />

// //             <label>Confirm Password</label>
// //             <input
// //               type="password"
// //               placeholder="Re-enter password"
// //               value={confirm}
// //               onChange={(e) => setConfirm(e.target.value)}
// //             />

// //             <button className="btnPrimary" type="button" onClick={onCreateAccount}>
// //               Create Account →
// //             </button>

// //             <button className="btnGhost" type="button" onClick={() => navigate("/login/user")}>
// //               ← Back to Login
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="loginFooter">© Public Grievance Redressal System — Demo Project</div>
// //     </div>
// //   );
// // }

// // export default CreateId;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Login.css";
// import { createUser } from "../auth";

// function CreateId() {
//   const navigate = useNavigate();

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   // ✅ Mobile number (+91) - store only 10 digits
//   const [mobile, setMobile] = useState("");

//   // ✅ NEW: Gmail (mandatory)
//   const [gmail, setGmail] = useState("");

//   // ✅ User can type own ID OR use generated suggestions
//   const [userId, setUserId] = useState("");
//   const [suggested, setSuggested] = useState([]);
//   const [selectedId, setSelectedId] = useState("");

//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const DOMAIN = "pgms.in";

//   const normalize = (s) =>
//     (s || "")
//       .trim()
//       .toLowerCase()
//       .replace(/[^a-z0-9]/g, "");

//   const isValidMobile = (digits10) => /^\d{10}$/.test(digits10);

//   // ✅ Gmail must be @gmail.com
//   const isValidGmail = (email) => {
//     const v = (email || "").trim().toLowerCase();
//     return /^[a-z0-9._%+-]+@gmail\.com$/i.test(v);
//   };

//   const normalizeUserId = (raw) => {
//     const v = (raw || "").trim().toLowerCase();

//     if (!v) return "";
//     if (v.includes("@")) return v;

//     const safe = v.replace(/\s+/g, ".").replace(/[^a-z0-9.]/g, "");
//     return `${safe}@${DOMAIN}`;
//   };

//   const isValidUserId = (id) => {
//     return /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(id);
//   };

//   const generateSuggestions = (fn, ln) => {
//     const f = normalize(fn);
//     const l = normalize(ln);
//     if (!f || !l) return [];

//     const base = [
//       `${f}.${l}`,
//       `${f}${l}`,
//       `${f}.${l}01`,
//       `${f}${l}01`,
//       `${f}.${l}2026`,
//       `${f}${l}2026`,
//     ];

//     const uniq = Array.from(new Set(base)).slice(0, 6);
//     return uniq.map((x) => `${x}@${DOMAIN}`);
//   };

//   const onGenerate = () => {
//     setError("");
//     setSuccess("");

//     if (!firstName.trim() || !lastName.trim()) {
//       setSuggested([]);
//       setSelectedId("");
//       setError("Fill First Name and Last Name first.");
//       return;
//     }

//     const list = generateSuggestions(firstName, lastName);
//     setSuggested(list);

//     const first = list[0] || "";
//     setSelectedId(first);
//     setUserId(first);
//   };

//   const onPickSuggested = (id) => {
//     setSelectedId(id);
//     setUserId(id);
//   };

//   const onCreateAccount = () => {
//     setError("");
//     setSuccess("");

//     if (!firstName.trim() || !lastName.trim()) {
//       setError("Please enter First Name and Last Name.");
//       return;
//     }

//     if (!isValidMobile(mobile)) {
//       setError("Enter valid Mobile Number (10 digits). Example: +91 9876543210");
//       return;
//     }

//     if (!isValidGmail(gmail)) {
//       setError("Please enter a valid Gmail ID (example: yourname@gmail.com).");
//       return;
//     }

//     const finalUserId = normalizeUserId(userId);

//     if (!finalUserId) {
//       setError("Please enter your User ID or generate one.");
//       return;
//     }

//     if (!isValidUserId(finalUserId)) {
//       setError(`User ID format is not valid. Example: saffan.mohammed@${DOMAIN}`);
//       return;
//     }

//     if (!password || !confirm) {
//       setError("Please create password and confirm it.");
//       return;
//     }

//     if (password.length < 6) {
//       setError("Password must be at least 6 characters.");
//       return;
//     }

//     if (password !== confirm) {
//       setError("Passwords do not match.");
//       return;
//     }

//     const res = createUser({
//       userId: finalUserId,
//       firstName: firstName.trim(),
//       lastName: lastName.trim(),
//       mobile: `+91${mobile}`,
//       gmail: gmail.trim().toLowerCase(),
//       password,
//     });

//     if (!res.ok) {
//       setError(res.error);
//       return;
//     }

//     setSuccess("✅ Account created successfully. Continue to login.");
//     setTimeout(() => navigate("/login/user", { replace: true }), 900);
//   };

//   return (
//     <div className="loginPage">
//       <div className="loginTopbar">
//         <div className="loginBrand">
//           <div className="brandIcon">PG</div>
//           <div>
//             <div className="brandTitle">Public Grievance System</div>
//             <div className="brandSub">Create Account</div>
//           </div>
//         </div>

//         <button
//           className="cornerBtn"
//           type="button"
//           onClick={() => navigate("/login/admin")}
//         >
//           Admin Login
//         </button>
//       </div>

//       <div className="loginWrap">
//         <div className="loginCard">
//           <h2 className="loginHeading">Create your User ID</h2>
//           <p className="loginHint">
//             Enter details → add Gmail → create your own ID or generate one → set
//             password.
//           </p>

//           {error && <div className="loginError">{error}</div>}
//           {success && <div className="loginSuccess">{success}</div>}

//           <div className="loginForm">
//             <label>First Name</label>
//             <input
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               placeholder="Eg: Saffan"
//             />

//             <label>Last Name</label>
//             <input
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               placeholder="Eg: Mohammed"
//             />

//             {/* ✅ Mobile (+91 mandatory) */}
//             <label>Mobile Number (India)</label>
//             <div
//               className="inputWrap"
//               style={{ display: "flex", gap: 10, alignItems: "center" }}
//             >
//               <div
//                 style={{
//                   padding: "10px 12px",
//                   border: "1px solid rgba(0,0,0,0.12)",
//                   borderRadius: 10,
//                   background: "rgba(255,255,255,0.7)",
//                   fontWeight: 600,
//                   userSelect: "none",
//                 }}
//               >
//                 +91
//               </div>

//               <input
//                 type="tel"
//                 inputMode="numeric"
//                 pattern="[0-9]*"
//                 placeholder="9876543210"
//                 value={mobile}
//                 onChange={(e) => {
//                   const digits = (e.target.value || "").replace(/\D/g, "");
//                   setMobile(digits.slice(0, 10));
//                 }}
//                 onKeyDown={(e) => {
//                   const allowed = [
//                     "Backspace",
//                     "Delete",
//                     "ArrowLeft",
//                     "ArrowRight",
//                     "Tab",
//                   ];
//                   if (allowed.includes(e.key)) return;
//                   if (!/^\d$/.test(e.key)) e.preventDefault();
//                 }}
//                 maxLength={10}
//               />
//             </div>
//             <div className="fieldHelp">
//               Mandatory. We store it as +91XXXXXXXXXX.
//             </div>

//             {/* ✅ NEW Gmail */}
//             <label>Gmail ID (Mandatory)</label>
//             <input
//               type="email"
//               placeholder="Eg: saffan@gmail.com"
//               value={gmail}
//               onChange={(e) => setGmail(e.target.value)}
//             />
//             <div className="fieldHelp">
//               Mandatory. Must be a valid @gmail.com address.
//             </div>

//             {/* ✅ Generate button */}
//             <button className="btnPrimary" type="button" onClick={onGenerate}>
//               Generate User ID
//             </button>

//             {/* ✅ User ID input */}
//             <label>User ID</label>
//             <input
//               type="text"
//               placeholder={`Eg: saffan.mohammed@${DOMAIN}`}
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//             />
//             <div className="fieldHelp">
//               You can type your own ID (we will add @{DOMAIN} if you don’t type
//               domain).
//             </div>

//             {/* ✅ Suggested list */}
//             {suggested.length > 0 && (
//               <div className="idBox">
//                 <div className="idBoxLabel">Or choose from suggestions</div>
//                 <div className="idList">
//                   {suggested.map((id) => (
//                     <label key={id} className="idItem">
//                       <input
//                         type="radio"
//                         name="userIdPick"
//                         checked={selectedId === id}
//                         onChange={() => onPickSuggested(id)}
//                       />
//                       <span className="idText">{id}</span>
//                     </label>
//                   ))}
//                 </div>
//                 <div className="idBoxHint">
//                   Selecting a suggestion will fill the User ID box.
//                 </div>
//               </div>
//             )}

//             <label>Create Password</label>
//             <input
//               type="password"
//               placeholder="Minimum 6 characters"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <label>Confirm Password</label>
//             <input
//               type="password"
//               placeholder="Re-enter password"
//               value={confirm}
//               onChange={(e) => setConfirm(e.target.value)}
//             />

//             <button className="btnPrimary" type="button" onClick={onCreateAccount}>
//               Create Account →
//             </button>

//             <button
//               className="btnGhost"
//               type="button"
//               onClick={() => navigate("/login/user")}
//             >
//               ← Back to Login
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="loginFooter">
//         © Public Grievance Redressal System — Demo Project
//       </div>
//     </div>
//   );
// }

// export default CreateId;
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { createUser } from "../auth";

function CreateId() {
  const navigate = useNavigate();

  const [gmail, setGmail] = useState(""); // optional
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState(""); // user enters 10 digits (without +91)
  const [userId, setUserId] = useState(""); // generated/selected
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // helper: convert 10 digits -> +91XXXXXXXXXX
  const normalizeMobile = (digits) => {
    const only = (digits || "").replace(/\D/g, "").slice(0, 10);
    return only.length === 10 ? `+91${only}` : "";
  };

  const suggestions = useMemo(() => {
    const fn = (firstName || "").trim().toLowerCase().replace(/\s+/g, "");
    const ln = (lastName || "").trim().toLowerCase().replace(/\s+/g, "");
    if (!fn) return [];
    const base = ln ? `${fn}.${ln}` : fn;
    return [
      `${base}@pgms.in`,
      `${base}01@pgms.in`,
      `${base}2026@pgms.in`,
      `${fn}${ln ? ln : ""}@pgms.in`,
    ];
  }, [firstName, lastName]);

  const pickSuggestion = (s) => setUserId(s);

  const validate = () => {
    const m = normalizeMobile(mobile);
    if (!firstName || !lastName || !m || !userId || !password) {
      return "Please fill all required fields.";
    }
    if (password.length < 6) return "Password must be at least 6 characters.";
    if (password !== confirm) return "Passwords do not match.";
    return "";
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const msg = validate();
    if (msg) {
      setError(msg);
      return;
    }

    const m = normalizeMobile(mobile);

    try {
      setLoading(true);

      // ✅ IMPORTANT: send backend-required field names
      await createUser({
        user_id: userId,
        first_name: firstName,
        last_name: lastName,
        mobile: m,
        gmail: gmail || null,
        password: password,
      });

      setSuccess("✅ Account created successfully. Now login.");
      setTimeout(() => navigate("/login/user", { replace: true }), 900);
    } catch (err) {
      setError(err.message || "Failed to create account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginPage">
      <div className="loginTopbar">
        <div className="loginBrand">
          <div className="brandIcon">PG</div>
          <div>
            <div className="brandTitle">Public Grievance System</div>
            <div className="brandSub">Create New User ID</div>
          </div>
        </div>
      </div>

      <div className="loginWrap">
        <div className="loginCard">
          <h2 className="loginHeading">Create New ID</h2>
          <p className="loginHint">Fill details → select a User ID → create password.</p>

          {error && <div className="loginError">{error}</div>}
          {success && <div className="loginSuccess">{success}</div>}

          <form className="loginForm" onSubmit={handleCreate}>
            <label>Gmail (optional)</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
            />

            <label>First Name *</label>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label>Last Name *</label>
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <label>Mobile Number (10-digit) *</label>
            <div className="inputWrap" style={{ display: "flex", gap: 8 }}>
              <input style={{ width: 70 }} value="+91" readOnly />
              <input
                type="text"
                placeholder="9876543210"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
              />
            </div>

            <label>User ID *</label>
            <input
              type="text"
              placeholder="Choose from suggestions below"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />

            {suggestions.length > 0 && (
              <div style={{ marginTop: 10 }}>
                <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 6 }}>
                  Suggestions (click to select):
                </div>
                <div style={{ display: "grid", gap: 8 }}>
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="btnGhost"
                      onClick={() => pickSuggestion(s)}
                      style={{ textAlign: "left" }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <label>Create Password *</label>
            <input
              type="password"
              placeholder="Minimum 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Confirm Password *</label>
            <input
              type="password"
              placeholder="Re-enter password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />

            <button className="btnPrimary" type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Account →"}
            </button>

            <button
              className="btnGhost"
              type="button"
              onClick={() => navigate("/login/user")}
            >
              ← Back to Login
            </button>
          </form>
        </div>
      </div>

      <div className="loginFooter">© Public Grievance Redressal System — Demo Project</div>
    </div>
  );
}

export default CreateId;
