// // // import React, { useEffect, useState } from "react";
// // // import "../styles/Dashboard.css";

// // // function UserDashboard() {
// // //   const [complaints, setComplaints] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   const fetchComplaints = async () => {
// // //     try {
// // //       const res = await fetch("http://localhost:5000/complaints");
// // //       const data = await res.json();
// // //       setComplaints(data);
// // //     } catch (err) {
// // //       alert("Backend not reachable. Please check backend server.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchComplaints();
// // //   }, []);

// // //   const counts = {
// // //     total: complaints.length,
// // //     pending: complaints.filter((c) => c.status === "Pending").length,
// // //     inprogress: complaints.filter((c) => c.status === "In Progress").length,
// // //     resolved: complaints.filter((c) => c.status === "Resolved").length,
// // //   };

// // //   const statusClass = (s) => {
// // //     if (s === "Pending") return "status pending";
// // //     if (s === "In Progress") return "status inprogress";
// // //     return "status resolved";
// // //   };

// // //   return (
// // //     <div className="page">
// // //       <div className="topbar">
// // //         <div className="brand">
// // //           <div className="brandLogo">PG</div>
// // //           <div>
// // //             <p className="brandTitle">Public Grievance System</p>
// // //             <p className="brandSub">User Dashboard</p>
// // //           </div>
// // //         </div>
// // //         <div className="badge">Logged in as: User</div>
// // //       </div>

// // //       <div className="grid">
// // //         <div className="card">
// // //           <h3 className="cardTitle">My Complaints Overview</h3>

// // //           <div className="kpis">
// // //             <div className="kpi">
// // //               <p className="kpiLabel">Total</p>
// // //               <p className="kpiValue">{counts.total}</p>
// // //             </div>
// // //             <div className="kpi">
// // //               <p className="kpiLabel">Pending</p>
// // //               <p className="kpiValue">{counts.pending}</p>
// // //             </div>
// // //             <div className="kpi">
// // //               <p className="kpiLabel">Resolved</p>
// // //               <p className="kpiValue">{counts.resolved}</p>
// // //             </div>
// // //           </div>

// // //           <div className="btnRow">
// // //             <button className="btn light" onClick={fetchComplaints}>
// // //               Refresh
// // //             </button>
// // //           </div>

// // //           <p className="note">
// // //             * Now data is coming from Flask backend + SQLite database.
// // //           </p>
// // //         </div>

// // //         <div className="card">
// // //           <h3 className="cardTitle">Submitted Complaints</h3>

// // //           {loading ? (
// // //             <p className="note">Loading...</p>
// // //           ) : complaints.length === 0 ? (
// // //             <p className="note">No complaints found.</p>
// // //           ) : (
// // //             <table className="table">
// // //               <thead>
// // //                 <tr>
// // //                   <th>Ticket</th>
// // //                   <th>Date</th>
// // //                   <th>Category</th>
// // //                   <th>Status</th>
// // //                   <th>Complaint</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {complaints.map((c) => (
// // //                   <tr key={c.ticket_id}>
// // //                     <td>{c.ticket_id}</td>
// // //                     <td>{c.created_at}</td>
// // //                     <td>{c.category}</td>
// // //                     <td>
// // //                       <span className={statusClass(c.status)}>{c.status}</span>
// // //                     </td>
// // //                     <td>{c.complaint}</td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           )}

// // //           <p className="note">
// // //             * Admin updates status from Admin Dashboard.
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default UserDashboard;

// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "../styles/Dashboard.css";
// // import { logout } from "../auth";

// // function UserDashboard() {
// //   const navigate = useNavigate();

// //   const [complaints, setComplaints] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const handleLogout = () => {
// //     logout();
// //     navigate("/select-login", { replace: true });
// //   };

// //   const fetchComplaints = async () => {
// //     setLoading(true);
// //     try {
// //       const res = await fetch("http://localhost:5000/complaints");
// //       const data = await res.json();
// //       setComplaints(data);
// //     } catch (err) {
// //       alert("Backend not reachable. Please check backend server.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchComplaints();
// //   }, []);

// //   const counts = {
// //     total: complaints.length,
// //     pending: complaints.filter((c) => c.status === "Pending").length,
// //     inprogress: complaints.filter((c) => c.status === "In Progress").length,
// //     resolved: complaints.filter((c) => c.status === "Resolved").length,
// //   };

// //   const statusClass = (s) => {
// //     if (s === "Pending") return "status pending";
// //     if (s === "In Progress") return "status inprogress";
// //     return "status resolved";
// //   };

// //   return (
// //     <div className="page">
// //       <div className="topbar">
// //         <div className="brand">
// //           <div className="brandLogo">PG</div>
// //           <div>
// //             <p className="brandTitle">Public Grievance System</p>
// //             <p className="brandSub">User Dashboard</p>
// //           </div>
// //         </div>

// //         {/* ✅ Right side */}
// //         <div className="topbarRight">
// //           <div className="badge">Logged in as: User</div>
// //           <button className="logoutBtn" onClick={handleLogout}>
// //             Logout
// //           </button>
// //         </div>
// //       </div>

// //       <div className="grid">
// //         <div className="card">
// //           <h3 className="cardTitle">My Complaints Overview</h3>

// //           <div className="kpis">
// //             <div className="kpi">
// //               <p className="kpiLabel">Total</p>
// //               <p className="kpiValue">{counts.total}</p>
// //             </div>
// //             <div className="kpi">
// //               <p className="kpiLabel">Pending</p>
// //               <p className="kpiValue">{counts.pending}</p>
// //             </div>
// //             <div className="kpi">
// //               <p className="kpiLabel">Resolved</p>
// //               <p className="kpiValue">{counts.resolved}</p>
// //             </div>
// //           </div>

// //           <div className="btnRow">
// //             <button className="btn light" onClick={fetchComplaints}>
// //               Refresh
// //             </button>
// //           </div>

// //           <p className="note">
// //             * Now data is coming from Flask backend + SQLite database.
// //           </p>
// //         </div>

// //         <div className="card">
// //           <h3 className="cardTitle">Submitted Complaints</h3>

// //           {loading ? (
// //             <p className="note">Loading...</p>
// //           ) : complaints.length === 0 ? (
// //             <p className="note">No complaints found.</p>
// //           ) : (
// //             <div className="tableWrap">
// //               <table className="table">
// //                 <thead>
// //                   <tr>
// //                     <th>Ticket</th>
// //                     <th>Date</th>
// //                     <th>Category</th>
// //                     <th>Status</th>
// //                     <th>Complaint</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {complaints.map((c) => (
// //                     <tr key={c.ticket_id}>
// //                       <td className="mono">{c.ticket_id}</td>
// //                       <td>{c.created_at}</td>
// //                       <td>{c.category}</td>
// //                       <td>
// //                         <span className={statusClass(c.status)}>{c.status}</span>
// //                       </td>
// //                       <td className="wrap">{c.complaint}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           )}

// //           <p className="note">* Admin updates status from Admin Dashboard.</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default UserDashboard;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Dashboard.css";
// import { logout } from "../auth";

// function UserDashboard() {
//   const navigate = useNavigate();

//   const [complaints, setComplaints] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const handleLogout = () => {
//     logout();
//     navigate("/select-login", { replace: true });
//   };

//   const fetchComplaints = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/complaints");
//       const data = await res.json();
//       setComplaints(data);
//     } catch (err) {
//       alert("Backend not reachable. Please check backend server.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchComplaints();
//   }, []);

//   const counts = {
//     total: complaints.length,
//     pending: complaints.filter((c) => c.status === "Pending").length,
//     inprogress: complaints.filter((c) => c.status === "In Progress").length,
//     resolved: complaints.filter((c) => c.status === "Resolved").length,
//   };

//   const statusClass = (s) => {
//     if (s === "Pending") return "status pending";
//     if (s === "In Progress") return "status inprogress";
//     return "status resolved";
//   };

//   return (
//     <div className="page">
//       <div className="topbar">
//         <div className="brand">
//           <div className="brandLogo">PG</div>
//           <div>
//             <p className="brandTitle">Public Grievance System</p>
//             <p className="brandSub">User Dashboard</p>
//           </div>
//         </div>

//         {/* ✅ Right side */}
//         <div className="topbarRight">
//           <div className="badge">Logged in as: User</div>
//           <button className="logoutBtn" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </div>

//       <div className="grid">
//         <div className="card">
//           <h3 className="cardTitle">My Complaints Overview</h3>

//           <div className="kpis">
//             <div className="kpi">
//               <p className="kpiLabel">Total</p>
//               <p className="kpiValue">{counts.total}</p>
//             </div>
//             <div className="kpi">
//               <p className="kpiLabel">Pending</p>
//               <p className="kpiValue">{counts.pending}</p>
//             </div>
//             <div className="kpi">
//               <p className="kpiLabel">Resolved</p>
//               <p className="kpiValue">{counts.resolved}</p>
//             </div>
//           </div>

//           <div className="btnRow">
//             <button className="btn light" onClick={fetchComplaints}>
//               Refresh
//             </button>
//           </div>

//           <p className="note">
//             * Now data is coming from Flask backend + SQLite database.
//           </p>
//         </div>

//         <div className="card">
//           <h3 className="cardTitle">Submitted Complaints</h3>

//           {loading ? (
//             <p className="note">Loading...</p>
//           ) : complaints.length === 0 ? (
//             <p className="note">No complaints found.</p>
//           ) : (
//             <div className="tableWrap">
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th>Ticket</th>
//                     <th>Date</th>
//                     <th>Category</th>
//                     <th>Status</th>
//                     <th>Complaint</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {complaints.map((c) => (
//                     <tr key={c.ticket_id}>
//                       <td className="mono">{c.ticket_id}</td>
//                       <td>{c.created_at}</td>
//                       <td>{c.category}</td>
//                       <td>
//                         <span className={statusClass(c.status)}>{c.status}</span>
//                       </td>
//                       <td className="wrap">{c.complaint}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           <p className="note">* Admin updates status from Admin Dashboard.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserDashboard;

// last pause code
// import React, { useEffect, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Dashboard.css";
// import { logout, getLoggedInUserId } from "../auth";

// function UserDashboard() {
//   const navigate = useNavigate();

//   const [complaints, setComplaints] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const userId = useMemo(() => getLoggedInUserId(), []);

//   const stats = useMemo(() => {
//     const total = complaints.length;

//     const pending = complaints.filter(
//       (c) => (c.status || "").toLowerCase() === "pending"
//     ).length;

//     const resolved = complaints.filter(
//       (c) => (c.status || "").toLowerCase() === "resolved"
//     ).length;

//     return { total, pending, resolved };
//   }, [complaints]);

//   const handleLogout = () => {
//     logout();
//     navigate("/login/user", { replace: true });
//   };

//   const handleBack = () => {
//     navigate("/home");
//   };

//   const fetchComplaints = async () => {
//     setLoading(true);
//     try {
//       // If your backend has a specific endpoint, update it here:
//       // Example: http://localhost:5000/user-complaints?userId=...
//       const res = await fetch("http://localhost:5000/complaints");

//       if (!res.ok) {
//         setComplaints([]);
//         return;
//       }

//       const data = await res.json();

//       // If backend returns { complaints: [...] } adjust this line:
//       const list = Array.isArray(data) ? data : data.complaints || [];

//       // OPTIONAL: If complaints belong to a userId, filter here.
//       // If you don’t store userId in complaints, leave it.
//       // const filtered = userId ? list.filter((c) => c.userId === userId) : list;

//       setComplaints(list);
//     } catch {
//       setComplaints([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchComplaints();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div className="dashPage">
//       {/* Topbar */}
//       <div className="dashTopbar">
//         <div className="dashBrand">
//           <div className="dashIcon">PG</div>
//           <div className="dashBrandText">
//             <div className="dashTitle">Public Grievance System</div>
//             <div className="dashSub">User Dashboard</div>
//           </div>
//         </div>

//         <div className="dashActions">
//           <button className="dashBtn ghost" type="button" onClick={handleBack}>
//             ← Back
//           </button>

//           <div className="dashPill">
//             Logged in as: <b>User</b>
//           </div>

//           <button className="dashBtn outline" type="button" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="dashWrap">
//         <div className="dashGrid">
//           {/* Left: Overview */}
//           <div className="dashCard">
//             <div className="dashCardHeader">
//               <div>
//                 <h3 className="dashCardTitle">My Complaints Overview</h3>
//                 <p className="dashCardHint">
//                   Summary of your complaints (auto refresh supported).
//                 </p>
//               </div>

//               <button
//                 className="dashBtn primary"
//                 type="button"
//                 onClick={fetchComplaints}
//                 disabled={loading}
//                 title="Refresh"
//               >
//                 {loading ? "Refreshing..." : "Refresh"}
//               </button>
//             </div>

//             <div className="dashStats">
//               <div className="statBox">
//                 <div className="statLabel">Total</div>
//                 <div className="statValue">{stats.total}</div>
//               </div>

//               <div className="statBox">
//                 <div className="statLabel">Pending</div>
//                 <div className="statValue">{stats.pending}</div>
//               </div>

//               <div className="statBox">
//                 <div className="statLabel">Resolved</div>
//                 <div className="statValue">{stats.resolved}</div>
//               </div>
//             </div>

//             <div className="dashNote">
//               * Data comes from backend (Flask/Node) + DB. If backend is off, you’ll
//               see empty list.
//             </div>
//           </div>

//           {/* Right: Submitted */}
//           <div className="dashCard">
//             <div className="dashCardHeader">
//               <div>
//                 <h3 className="dashCardTitle">Submitted Complaints</h3>
//                 <p className="dashCardHint">
//                   Admin updates status from Admin Dashboard.
//                 </p>
//               </div>
//             </div>

//             {complaints.length === 0 ? (
//               <div className="dashEmpty">
//                 <div className="dashEmptyTitle">No complaints found</div>
//                 <div className="dashEmptyHint">
//                   Submit a complaint from the form page, then come back here.
//                 </div>
//                 <button className="dashBtn ghost" type="button" onClick={handleBack}>
//                   Go to Complaint Form
//                 </button>
//               </div>
//             ) : (
//               <div className="dashList">
//                 {complaints.map((c, idx) => (
//                   <div className="dashItem" key={c.id || c._id || idx}>
//                     <div className="dashItemTop">
//                       <div className="dashItemTitle">
//                         {c.category || "Complaint"}
//                       </div>

//                       <span
//                         className={
//                           "dashStatus " +
//                           ((c.status || "Pending").toLowerCase() === "resolved"
//                             ? "resolved"
//                             : "pending")
//                         }
//                       >
//                         {c.status || "Pending"}
//                       </span>
//                     </div>

//                     <div className="dashItemMeta">
//                       <span>{c.state || "-"}</span>
//                       <span className="dot">•</span>
//                       <span>{c.city || "-"}</span>
//                       <span className="dot">•</span>
//                       <span>{c.area || "-"}</span>
//                     </div>

//                     <div className="dashItemBody">
//                       {c.complaint || c.details || "—"}
//                     </div>

//                     <div className="dashItemFooter">
//                       <span className="muted">
//                         {c.created_at || c.createdAt || ""}
//                       </span>
//                       <span className="muted">
//                         {userId ? `User: ${userId}` : ""}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="dashFooter">
//           © Public Grievance Redressal System — Demo Project
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserDashboard;


// Last pause code
// import React, { useState } from "react";
// import { submitComplaint } from "../auth"; // ✅ IMPORTANT
// import { useNavigate } from "react-router-dom";

// export default function UserDashboard() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     state: "",
//     city: "",
//     area: "",
//     category: "",
//     complaint: "",
//   });

//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   function updateField(key, value) {
//     setForm((p) => ({ ...p, [key]: value }));
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     // ✅ minimal validation
//     if (!form.name || !form.state || !form.city || !form.area || !form.category || !form.complaint) {
//       setError("Please fill all fields.");
//       return;
//     }

//     setLoading(true);
//     const res = await submitComplaint({
//       name: form.name.trim(),
//       state: form.state,
//       city: form.city,
//       area: form.area.trim(),
//       category: form.category,
//       complaint: form.complaint.trim(),
//     });
//     setLoading(false);

//     // ✅ submitComplaint throws if backend returns error, so wrap in try-catch normally,
//     // but since your auth.js already returns request(...) directly, we do try/catch:
//   };

//   // ✅ correct try/catch version (use this instead)
//   const handleSubmitSafe = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       setLoading(true);
//       const data = await submitComplaint({
//         name: form.name.trim(),
//         state: form.state,
//         city: form.city,
//         area: form.area.trim(),
//         category: form.category,
//         complaint: form.complaint.trim(),
//       });
//       setLoading(false);

//       setSuccess(`Complaint submitted successfully ✅ Ticket: ${data.ticket_no || ""}`);

//       // ✅ clear form
//       setForm({ name: "", state: "", city: "", area: "", category: "", complaint: "" });

//       // ✅ optional: go to complaints page automatically
//       // navigate("/user-dashboard");
//     } catch (err) {
//       setLoading(false);
//       setError(err.message || "Failed to submit complaint");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmitSafe}>
//       {/* your UI inputs... just call updateField() */}
//       <button type="submit" disabled={loading}>
//         {loading ? "Submitting..." : "Submit"}
//       </button>
//       {success && <div style={{ color: "green" }}>{success}</div>}
//       {error && <div style={{ color: "red" }}>{error}</div>}
//     </form>
//   );
// }

import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyComplaints, logout } from "../auth";
import "../styles/UserDashboard.css"; // if you already have styling

export default function UserDashboard() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [complaints, setComplaints] = useState([]);

  const fetchMine = async () => {
    setError("");
    setLoading(true);
    try {
      const data = await getMyComplaints();
      setComplaints(data?.complaints || []);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.message || "Failed to fetch complaints");
    }
  };

  useEffect(() => {
    fetchMine();
  }, []);

  const stats = useMemo(() => {
    const total = complaints.length;
    const pending = complaints.filter((c) => c.status === "Pending").length;
    const inProgress = complaints.filter((c) => c.status === "In Progress").length;
    const resolved = complaints.filter((c) => c.status === "Resolved").length;
    return { total, pending, inProgress, resolved };
  }, [complaints]);

  const goBack = () => navigate("/home");
  const onLogout = () => {
    logout();
    navigate("/login/user", { replace: true });
  };

  return (
    <div className="ud-page">
      {/* topbar */}
      <div className="ud-topbar">
        <div className="ud-left">
          <div className="ud-brand">Public Grievance System</div>
          <div className="ud-sub">User Dashboard</div>
        </div>
        <div className="ud-right">
          <button className="ud-btn" onClick={goBack}>← Back</button>
          <button className="ud-btn" onClick={onLogout}>Logout</button>
        </div>
      </div>

      <div className="ud-content">
        <div className="ud-cards">
          <div className="ud-card">
            <div className="ud-card-title">Total</div>
            <div className="ud-card-value">{stats.total}</div>
          </div>
          <div className="ud-card">
            <div className="ud-card-title">Pending</div>
            <div className="ud-card-value">{stats.pending}</div>
          </div>
          <div className="ud-card">
            <div className="ud-card-title">In Progress</div>
            <div className="ud-card-value">{stats.inProgress}</div>
          </div>
          <div className="ud-card">
            <div className="ud-card-title">Resolved</div>
            <div className="ud-card-value">{stats.resolved}</div>
          </div>

          <button className="ud-refresh" onClick={fetchMine} disabled={loading}>
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>

        {error && (
          <div className="ud-error">
            ❌ {error} <br />
            (Check backend is running, token exists, API_BASE port is correct)
          </div>
        )}

        <div className="ud-tableWrap">
          <h3 className="ud-sectionTitle">Submitted Complaints</h3>

          {loading ? (
            <div className="ud-muted">Loading complaints...</div>
          ) : complaints.length === 0 ? (
            <div className="ud-muted">
              No complaints found. Submit a complaint from the form page, then refresh.
            </div>
          ) : (
            <table className="ud-table">
              <thead>
                <tr>
                  <th>Ticket</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Complaint</th>
                  <th>Status</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((c) => (
                  <tr key={c.id}>
                    <td>{c.ticket_no}</td>
                    <td>{c.category}</td>
                    <td>
                      {c.city}, {c.state} <br />
                      <small>{c.area}</small>
                    </td>
                    <td style={{ maxWidth: 360 }}>{c.complaint}</td>
                    <td>
                      <span className={`ud-pill ud-${String(c.status).replace(/\s/g, "").toLowerCase()}`}>
                        {c.status}
                      </span>
                    </td>
                    <td>{c.created_at ? String(c.created_at).replace("T", " ").slice(0, 19) : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div className="ud-footer">© Public Grievance Redressal System — Demo Project</div>
    </div>
  );
}
