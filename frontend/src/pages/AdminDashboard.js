// // import React, { useEffect, useState } from "react";
// // import "../styles/Dashboard.css";

// // function AdminDashboard() {
// //   const [complaints, setComplaints] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const fetchComplaints = async () => {
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

// //   const updateStatus = async (ticket_id, status) => {
// //     try {
// //       const res = await fetch("http://localhost:5000/admin/update-status", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ ticket_id, status }),
// //       });

// //       const data = await res.json();

// //       if (!res.ok) {
// //         alert(data.error || "Status update failed");
// //         return;
// //       }

// //       // Refresh list after update
// //       fetchComplaints();
// //     } catch (err) {
// //       alert("Backend not reachable. Please check backend server.");
// //     }
// //   };

// //   const statusClass = (s) => {
// //     if (s === "Pending") return "status pending";
// //     if (s === "In Progress") return "status inprogress";
// //     return "status resolved";
// //   };

// //   const kpi = {
// //     total: complaints.length,
// //     pending: complaints.filter((c) => c.status === "Pending").length,
// //     inprogress: complaints.filter((c) => c.status === "In Progress").length,
// //     resolved: complaints.filter((c) => c.status === "Resolved").length,
// //   };

// //   return (
// //     <div className="page">
// //       <div className="topbar">
// //         <div className="brand">
// //           <div className="brandLogo">AD</div>
// //           <div>
// //             <p className="brandTitle">Public Grievance System</p>
// //             <p className="brandSub">Admin Dashboard</p>
// //           </div>
// //         </div>
// //         <div className="badge">Role: Admin</div>
// //       </div>

// //       <div className="grid">
// //         <div className="card">
// //           <h3 className="cardTitle">Admin Analytics</h3>

// //           <div className="kpis">
// //             <div className="kpi">
// //               <p className="kpiLabel">Total</p>
// //               <p className="kpiValue">{kpi.total}</p>
// //             </div>
// //             <div className="kpi">
// //               <p className="kpiLabel">Pending</p>
// //               <p className="kpiValue">{kpi.pending}</p>
// //             </div>
// //             <div className="kpi">
// //               <p className="kpiLabel">In Progress</p>
// //               <p className="kpiValue">{kpi.inprogress}</p>
// //             </div>
// //           </div>

// //           <div className="btnRow">
// //             <button className="btn light" onClick={fetchComplaints}>
// //               Refresh
// //             </button>
// //           </div>

// //           <p className="note">
// //             * Data is coming from Flask backend + SQLite database.
// //           </p>
// //         </div>

// //         <div className="card">
// //           <h3 className="cardTitle">Manage Complaints</h3>

// //           {loading ? (
// //             <p className="note">Loading...</p>
// //           ) : complaints.length === 0 ? (
// //             <p className="note">No complaints found.</p>
// //           ) : (
// //             <table className="table">
// //               <thead>
// //                 <tr>
// //                   <th>Ticket</th>
// //                   <th>Name</th>
// //                   <th>Email</th>
// //                   <th>Category</th>
// //                   <th>Status</th>
// //                   <th>Update</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {complaints.map((c) => (
// //                   <tr key={c.ticket_id}>
// //                     <td>{c.ticket_id}</td>
// //                     <td>{c.name}</td>
// //                     <td>{c.email}</td>
// //                     <td>{c.category}</td>
// //                     <td>
// //                       <span className={statusClass(c.status)}>{c.status}</span>
// //                     </td>
// //                     <td>
// //                       <select
// //                         value={c.status}
// //                         onChange={(e) => updateStatus(c.ticket_id, e.target.value)}
// //                       >
// //                         <option>Pending</option>
// //                         <option>In Progress</option>
// //                         <option>Resolved</option>
// //                       </select>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           )}

// //           <p className="note">
// //             * After updating status, check User Dashboard (refresh) to see changes.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminDashboard;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Dashboard.css";
// import { logout } from "../auth";

// function AdminDashboard() {
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

//   const updateStatus = async (ticket_id, status) => {
//     try {
//       const res = await fetch("http://localhost:5000/admin/update-status", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ticket_id, status }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.error || "Status update failed");
//         return;
//       }

//       fetchComplaints();
//     } catch (err) {
//       alert("Backend not reachable. Please check backend server.");
//     }
//   };

//   const statusClass = (s) => {
//     if (s === "Pending") return "status pending";
//     if (s === "In Progress") return "status inprogress";
//     return "status resolved";
//   };

//   const kpi = {
//     total: complaints.length,
//     pending: complaints.filter((c) => c.status === "Pending").length,
//     inprogress: complaints.filter((c) => c.status === "In Progress").length,
//     resolved: complaints.filter((c) => c.status === "Resolved").length,
//   };

//   return (
//     <div className="page">
//       <div className="topbar">
//         <div className="brand">
//           <div className="brandLogo adminLogo">AD</div>
//           <div>
//             <p className="brandTitle">Public Grievance System</p>
//             <p className="brandSub">Admin Dashboard</p>
//           </div>
//         </div>

//         {/* ✅ Right side */}
//         <div className="topbarRight">
//           <div className="badge adminBadge">Role: Admin</div>
//           <button className="logoutBtn" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </div>

//       <div className="grid">
//         <div className="card">
//           <h3 className="cardTitle">Admin Analytics</h3>

//           <div className="kpis">
//             <div className="kpi">
//               <p className="kpiLabel">Total</p>
//               <p className="kpiValue">{kpi.total}</p>
//             </div>
//             <div className="kpi">
//               <p className="kpiLabel">Pending</p>
//               <p className="kpiValue">{kpi.pending}</p>
//             </div>
//             <div className="kpi">
//               <p className="kpiLabel">In Progress</p>
//               <p className="kpiValue">{kpi.inprogress}</p>
//             </div>
//             <div className="kpi">
//               <p className="kpiLabel">Resolved</p>
//               <p className="kpiValue">{kpi.resolved}</p>
//             </div>
//           </div>

//           <div className="btnRow">
//             <button className="btn light" onClick={fetchComplaints}>
//               Refresh
//             </button>
//           </div>

//           <p className="note">
//             * Data is coming from Flask backend + SQLite database.
//           </p>
//         </div>

//         <div className="card">
//           <h3 className="cardTitle">Manage Complaints</h3>

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
//                     <th>Name</th>
//                     <th>Mobile</th>
//                     <th>Category</th>
//                     <th>Status</th>
//                     <th>Update</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {complaints.map((c) => (
//                     <tr key={c.ticket_id}>
//                       <td className="mono">{c.ticket_id}</td>
//                       <td>{c.name}</td>
//                       <td>{c.mobile || "-"}</td>
//                       <td>{c.category}</td>
//                       <td>
//                         <span className={statusClass(c.status)}>{c.status}</span>
//                       </td>
//                       <td>
//                         <select
//                           className="statusSelect"
//                           value={c.status}
//                           onChange={(e) => updateStatus(c.ticket_id, e.target.value)}
//                         >
//                           <option>Pending</option>
//                           <option>In Progress</option>
//                           <option>Resolved</option>
//                         </select>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           <p className="note">
//             * After updating status, refresh User Dashboard to see changes.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";
import { logout, getAuth, adminGetAllComplaints, adminUpdateStatus } from "../auth";

function AdminDashboard() {
  const navigate = useNavigate();
  const auth = getAuth();
  const adminEmail = auth?.email || "Admin";

  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(false);

  const [complaints, setComplaints] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    resolved: 0,
  });

  const statusOptions = useMemo(
    () => ["Pending", "In Progress", "Resolved"],
    []
  );

  const computeStats = (items) => {
    const s = { total: items.length, pending: 0, inProgress: 0, resolved: 0 };
    items.forEach((c) => {
      const st = (c.status || "Pending").toLowerCase();
      if (st === "pending") s.pending += 1;
      else if (st === "in progress" || st === "inprogress") s.inProgress += 1;
      else if (st === "resolved") s.resolved += 1;
      else s.pending += 1;
    });
    return s;
  };

  const demoComplaints = () => {
    const list = [
      {
        id: "PG-1001",
        userId: "saffan.user@pgms.in",
        name: "Ottakani Mohammed Saffan",
        state: "Tamil Nadu",
        city: "Chennai",
        area: "Vandaloor",
        category: "Road / Street Damage",
        complaint: "Road damage at street near bus stop.",
        created_at: new Date().toLocaleString(),
        status: "Pending",
      },
      {
        id: "PG-1002",
        userId: "jeofrin.user@pgms.in",
        name: "Jeofrin",
        state: "Tamil Nadu",
        city: "Vellore",
        area: "Pernambut",
        category: "Water Supply",
        complaint: "No water supply for 2 days.",
        created_at: new Date().toLocaleString(),
        status: "In Progress",
      },
      {
        id: "PG-1003",
        userId: "demo.user@pgms.in",
        name: "Demo User",
        state: "Kerala",
        city: "Kochi",
        area: "MG Road",
        category: "Garbage / Waste",
        complaint: "Garbage not collected regularly.",
        created_at: new Date().toLocaleString(),
        status: "Resolved",
      },
    ];
    setComplaints(list);
    setStats(computeStats(list));
  };

  const fetchComplaints = async () => {
    setLoading(true);
    setOffline(false);

    try {
      // Use auth.js helper function which includes auth token
      const data = await adminGetAllComplaints();
      const list = Array.isArray(data) ? data : data?.complaints || [];
      setComplaints(list);
      setStats(computeStats(list));
    } catch (e) {
      // Offline fallback
      setOffline(true);
      demoComplaints();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login/admin", { replace: true });
  };

  const handleUpdateStatus = async (id, newStatus) => {
    // Update UI immediately
    setComplaints((prev) => {
      const updated = prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c));
      setStats(computeStats(updated));
      return updated;
    });

    // If offline, stop here
    if (offline) return;

    // Try backend update using auth.js helper
    try {
      await adminUpdateStatus({ complaintId: id, status: newStatus });
    } catch {
      // If backend fails suddenly, switch to offline mode silently
      setOffline(true);
    }
  };

  return (
    <div className="ad-page">
      {/* Topbar */}
      <div className="ad-topbar">
        <div className="ad-brand">
          <div className="ad-logo">PG</div>
          <div>
            <div className="ad-title">Public Grievance System</div>
            <div className="ad-sub">Admin Dashboard</div>
          </div>
        </div>

        <div className="ad-actions">
          <div className="ad-pill">Logged in as: <b>{adminEmail}</b></div>
          <button className="ad-btn ghost" type="button" onClick={fetchComplaints}>
            Refresh
          </button>
          <button className="ad-btn danger" type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="ad-wrap">
        {offline && (
          <div className="ad-banner">
            ⚠️ Backend not reachable — showing <b>Offline Demo Data</b>. Status changes will be local only.
          </div>
        )}

        {/* Stats */}
        <div className="ad-grid">
          <div className="ad-card stat">
            <div className="stat-label">Total Complaints</div>
            <div className="stat-value">{stats.total}</div>
          </div>

          <div className="ad-card stat">
            <div className="stat-label">Pending</div>
            <div className="stat-value">{stats.pending}</div>
          </div>

          <div className="ad-card stat">
            <div className="stat-label">In Progress</div>
            <div className="stat-value">{stats.inProgress}</div>
          </div>

          <div className="ad-card stat">
            <div className="stat-label">Resolved</div>
            <div className="stat-value">{stats.resolved}</div>
          </div>
        </div>

        {/* Table */}
        <div className="ad-card tableCard">
          <div className="tableHead">
            <div>
              <h3 className="tableTitle">Manage Complaints</h3>
              <p className="tableHint">
                Update status here. Users can refresh their dashboard to see updates.
              </p>
            </div>
            <div className="tableMeta">
              {loading ? <span className="chip">Loading...</span> : <span className="chip">Loaded</span>}
              {offline ? <span className="chip warn">Offline</span> : <span className="chip ok">Online</span>}
            </div>
          </div>

          <div className="tableWrap">
            <table className="ad-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Complaint</th>
                  <th>Created</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {complaints.length === 0 && !loading && (
                  <tr>
                    <td colSpan="7" className="emptyRow">
                      No complaints found.
                    </td>
                  </tr>
                )}

                {complaints.map((c) => (
                  <tr key={c.id}>
                    <td className="mono">{c.id}</td>
                    <td>
                      <div className="userCell">
                        <div className="userName">{c.name || "User"}</div>
                        <div className="userId">{c.userId || "-"}</div>
                      </div>
                    </td>
                    <td>{c.category}</td>
                    <td>
                      <div className="locCell">
                        <div>{c.city}, {c.state}</div>
                        <div className="muted">{c.area}</div>
                      </div>
                    </td>
                    <td className="complaintCell">{c.complaint}</td>
                    <td className="muted">{c.created_at}</td>
                    <td>
                      <select
                        className="statusSelect"
                        value={c.status || "Pending"}
                        onChange={(e) => handleUpdateStatus(c.id, e.target.value)}
                      >
                        {statusOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="tableFoot">
            <span className="muted">
              Tip: If backend is running, changes can be saved to database. Otherwise this works in demo mode.
            </span>

            <button className="ad-btn" type="button" onClick={() => navigate("/login/user")}>
              Go to User Login →
            </button>
          </div>
        </div>

        <div className="ad-footer">© Public Grievance Redressal System — Demo Project</div>
      </div>
    </div>
  );
}

export default AdminDashboard;
