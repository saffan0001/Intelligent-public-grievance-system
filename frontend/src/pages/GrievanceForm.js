// import React, { useEffect, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/GrievanceForm.css";
// import { logout } from "../auth";

// function GrievanceForm() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [stateName, setStateName] = useState("");
//   const [city, setCity] = useState("");
//   const [area, setArea] = useState("");
//   const [category, setCategory] = useState("");
//   const [complaint, setComplaint] = useState("");

//   const [dateTime, setDateTime] = useState("");
//   const [success, setSuccess] = useState(false);

//   // ✅ All India states (list)
//   const INDIA_STATES = useMemo(
//     () => [
//       "Andhra Pradesh",
//       "Arunachal Pradesh",
//       "Assam",
//       "Bihar",
//       "Chhattisgarh",
//       "Goa",
//       "Gujarat",
//       "Haryana",
//       "Himachal Pradesh",
//       "Jharkhand",
//       "Karnataka",
//       "Kerala",
//       "Madhya Pradesh",
//       "Maharashtra",
//       "Manipur",
//       "Meghalaya",
//       "Mizoram",
//       "Nagaland",
//       "Odisha",
//       "Punjab",
//       "Rajasthan",
//       "Sikkim",
//       "Tamil Nadu",
//       "Telangana",
//       "Tripura",
//       "Uttar Pradesh",
//       "Uttarakhand",
//       "West Bengal",
//       "Andaman and Nicobar Islands",
//       "Chandigarh",
//       "Dadra and Nagar Haveli and Daman and Diu",
//       "Delhi",
//       "Jammu and Kashmir",
//       "Ladakh",
//       "Lakshadweep",
//       "Puducherry",
//     ],
//     []
//   );

//   // ✅ City mapping (Tamil Nadu example)
//   const CITIES_BY_STATE = useMemo(
//     () => ({
//       "Tamil Nadu": [
//         "Chennai",
//         "Coimbatore",
//         "Madurai",
//         "Tiruchirappalli",
//         "Salem",
//         "Tirunelveli",
//         "Vellore",
//         "Erode",
//         "Thanjavur",
//         "Dindigul",
//         "Tiruppur",
//         "Kanchipuram",
//         "Cuddalore",
//         "Nagercoil",
//         "Hosur",
//       ],
//       Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kannur"],
//       Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
//       Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
//       "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
//       Delhi: ["New Delhi"],
//       Puducherry: ["Puducherry"],
//     }),
//     []
//   );

//   // ✅ Complaint categories (select options)
//   const CATEGORY_LIST = useMemo(
//     () => [
//       "Road / Street Damage",
//       "Water Supply",
//       "Drainage / Sewage",
//       "Electricity",
//       "Garbage / Waste",
//       "Street Light",
//       "Public Transport",
//       "Corruption / Bribery",
//       "Police / Safety",
//       "Government Services Delay",
//       "Other",
//     ],
//     []
//   );

//   // ✅ Auto date-time (updates every 10 seconds)
//   useEffect(() => {
//     const update = () => {
//       const now = new Date();
//       const formatted = now.toLocaleString(); // local time
//       setDateTime(formatted);
//     };
//     update();
//     const t = setInterval(update, 10000);
//     return () => clearInterval(t);
//   }, []);

//   // Reset city if state changes
//   useEffect(() => {
//     setCity("");
//   }, [stateName]);

//   const handleLogout = () => {
//     logout();
//     navigate("/login/user", { replace: true });
//   };

//   // ✅ NEW: Complaints button → go to dashboard
//   const goToComplaints = () => {
//     navigate("/user-dashboard");
//   };

//   const cityOptions = CITIES_BY_STATE[stateName] || [];

//   // ✅ Helper: go dashboard
//   const goDashboard = () => {
//     navigate("/user-dashboard", { replace: true });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !stateName || !city || !area || !category || !complaint) {
//       alert("Please fill all fields");
//       return;
//     }

//     // ✅ Show success and go to dashboard ALWAYS (even if backend fails/off)
//     setSuccess(true);

//     // ✅ Use submitComplaint from auth.js (includes auth token)
//     submitComplaint({
//       name,
//       state: stateName,
//       city,
//       area,
//       category,
//       complaint,
//       created_at: dateTime,
//     }).catch(() => {
//       // backend down → ignore, but still navigate to dashboard
//     });

//     // ✅ Clear form (optional)
//     setName("");
//     setStateName("");
//     setCity("");
//     setArea("");
//     setCategory("");
//     setComplaint("");

//     setTimeout(() => {
//       setSuccess(false);
//       goDashboard();
//     }, 600);
//   };

//   return (
//     <div className="pg-page">
//       {/* Topbar */}
//       <div className="pg-topbar">
//         <div className="pg-topbar-left">
//           <span className="pg-topbar-title">PUBLIC GRIEVANCES</span>
//         </div>

//         <div className="pg-topbar-right">
//           {/* ✅ NEW: Complaints button next to Logout */}
//           <button
//             className="pg-logout-btn"
//             type="button"
//             onClick={goToComplaints}
//             style={{ marginRight: 10 }}
//             title="View your submitted complaints"
//           >
//             Complaints
//           </button>

//           <button className="pg-logout-btn" type="button" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Main */}
//       <div className="pg-content">
//         <div className="pg-card">
//           <h2 className="pg-card-title">PUBLIC GRIEVANCE</h2>
//           <p className="pg-card-sub">
//             Raise a complaint and track status from User Dashboard.
//           </p>

//           {success && (
//             <div className="pg-success">✅ Complaint submitted successfully</div>
//           )}

//           <form className="pg-form" onSubmit={handleSubmit}>
//             {/* Date & Time */}
//             <div className="pg-field">
//               <label className="pg-label">Date & Time</label>
//               <input className="pg-input" type="text" value={dateTime} readOnly />
//               <div className="pg-help">Auto generated (current system time)</div>
//             </div>

//             {/* Name */}
//             <div className="pg-field">
//               <label className="pg-label">Name</label>
//               <input
//                 className="pg-input"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//               />
//             </div>

//             {/* State */}
//             <div className="pg-field">
//               <label className="pg-label">State</label>
//               <select
//                 className="pg-select2"
//                 value={stateName}
//                 onChange={(e) => setStateName(e.target.value)}
//               >
//                 <option value="">Select state</option>
//                 {INDIA_STATES.map((s) => (
//                   <option key={s} value={s}>
//                     {s}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* City */}
//             <div className="pg-field">
//               <label className="pg-label">City</label>
//               <select
//                 className="pg-select2"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 disabled={!stateName}
//               >
//                 <option value="">
//                   {stateName ? "Select city" : "Select state first"}
//                 </option>

//                 {cityOptions.length > 0 ? (
//                   cityOptions.map((c) => (
//                     <option key={c} value={c}>
//                       {c}
//                     </option>
//                   ))
//                 ) : (
//                   stateName && <option value="">(Cities not added for this state)</option>
//                 )}
//               </select>

//               {stateName && cityOptions.length === 0 && (
//                 <div className="pg-help">
//                   Cities list not added for this state yet. Tell me which state, I’ll add.
//                 </div>
//               )}
//             </div>

//             {/* Area */}
//             <div className="pg-field">
//               <label className="pg-label">Area / Locality</label>
//               <input
//                 className="pg-input"
//                 type="text"
//                 value={area}
//                 onChange={(e) => setArea(e.target.value)}
//                 placeholder="Eg: Pernambut, Gandhi Nagar, etc."
//               />
//             </div>

//             {/* Category */}
//             <div className="pg-field">
//               <label className="pg-label">Complaint Category</label>
//               <select
//                 className="pg-select2"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 <option value="">Select category</option>
//                 {CATEGORY_LIST.map((cat) => (
//                   <option key={cat} value={cat}>
//                     {cat}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Complaint */}
//             <div className="pg-field">
//               <label className="pg-label">Complaint Details</label>
//               <textarea
//                 className="pg-textarea"
//                 value={complaint}
//                 onChange={(e) => setComplaint(e.target.value)}
//                 placeholder="Write your grievance in detail..."
//                 rows={4}
//               />
//             </div>

//             <button className="pg-submit" type="submit">
//               Submit
//             </button>

//             <div className="pg-links">
//               <span>Forgot Ticket?</span>
//               <span className="pg-dot">•</span>
//               <span>Help</span>
//               <span className="pg-dot">•</span>
//               <span>Track Status</span>
//             </div>
//           </form>
//         </div>
//       </div>

//       <div className="pg-footer">
//         © Public Grievance Redressal System — Demo Project
//       </div>
//     </div>
//   );
// }

// export default GrievanceForm;

import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GrievanceForm.css";
import { logout, submitComplaint } from "../auth"; // ✅ IMPORT submitComplaint

function GrievanceForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [stateName, setStateName] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [complaint, setComplaint] = useState("");
  const [dateTime, setDateTime] = useState("");

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const INDIA_STATES = useMemo(
    () => [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Delhi",
      "Jammu and Kashmir",
      "Ladakh",
      "Lakshadweep",
      "Puducherry",
    ],
    []
  );

  const CITIES_BY_STATE = useMemo(
    () => ({
      "Tamil Nadu": [
        "Chennai",
        "Coimbatore",
        "Madurai",
        "Tiruchirappalli",
        "Salem",
        "Tirunelveli",
        "Vellore",
        "Erode",
        "Thanjavur",
        "Dindigul",
        "Tiruppur",
        "Kanchipuram",
        "Cuddalore",
        "Nagercoil",
        "Hosur",
      ],
      Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kannur"],
      Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
      Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
      "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
      Delhi: ["New Delhi"],
      Puducherry: ["Puducherry"],
    }),
    []
  );

  const CATEGORY_LIST = useMemo(
    () => [
      "Road / Street Damage",
      "Water Supply",
      "Drainage / Sewage",
      "Electricity",
      "Garbage / Waste",
      "Street Light",
      "Public Transport",
      "Corruption / Bribery",
      "Police / Safety",
      "Government Services Delay",
      "Other",
    ],
    []
  );

  useEffect(() => {
    const update = () => setDateTime(new Date().toLocaleString());
    update();
    const t = setInterval(update, 10000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    setCity("");
  }, [stateName]);

  const handleLogout = () => {
    logout();
    navigate("/login/user", { replace: true });
  };

  const goToComplaints = () => navigate("/user-dashboard");

  const cityOptions = CITIES_BY_STATE[stateName] || [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!name || !stateName || !city || !area || !category || !complaint) {
      setErrorMsg("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const data = await submitComplaint({
        name: name.trim(),
        state: stateName, // ✅ backend expects "state"
        city,
        area: area.trim(),
        category,
        complaint: complaint.trim(),
      });

      setLoading(false);

      setSuccessMsg(
        `✅ Complaint submitted successfully${data?.ticket_no ? ` (Ticket: ${data.ticket_no})` : ""}`
      );

      // clear fields
      setName("");
      setStateName("");
      setCity("");
      setArea("");
      setCategory("");
      setComplaint("");

      // go dashboard so user can see it in list
      setTimeout(() => {
        navigate("/user-dashboard");
      }, 700);
    } catch (err) {
      setLoading(false);
      setErrorMsg(err.message || "Failed to submit complaint (backend error).");
    }
  };

  return (
    <div className="pg-page">
      {/* Topbar */}
      <div className="pg-topbar">
        <div className="pg-topbar-left">
          <span className="pg-topbar-title">PUBLIC GRIEVANCES</span>
        </div>
        <div className="pg-topbar-right">
          <button
            className="pg-logout-btn"
            type="button"
            onClick={goToComplaints}
            style={{ marginRight: 10 }}
            title="View your submitted complaints"
          >
            Complaints
          </button>
          <button className="pg-logout-btn" type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="pg-content">
        <div className="pg-card">
          <h2 className="pg-card-title">PUBLIC GRIEVANCE</h2>
          <p className="pg-card-sub">Raise a complaint and track status from User Dashboard.</p>

          {successMsg && <div className="pg-success">{successMsg}</div>}
          {errorMsg && (
            <div
              style={{
                marginTop: 10,
                padding: "10px 12px",
                borderRadius: 8,
                background: "#ffe6e6",
                color: "#9b1c1c",
                fontWeight: 600,
              }}
            >
              ❌ {errorMsg}
            </div>
          )}

          <form className="pg-form" onSubmit={handleSubmit}>
            {/* Date & Time */}
            <div className="pg-field">
              <label className="pg-label">Date & Time</label>
              <input className="pg-input" type="text" value={dateTime} readOnly />
              <div className="pg-help">Auto generated (current system time)</div>
            </div>

            {/* Name */}
            <div className="pg-field">
              <label className="pg-label">Name</label>
              <input
                className="pg-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            {/* State */}
            <div className="pg-field">
              <label className="pg-label">State</label>
              <select className="pg-select2" value={stateName} onChange={(e) => setStateName(e.target.value)}>
                <option value="">Select state</option>
                {INDIA_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* City */}
            <div className="pg-field">
              <label className="pg-label">City</label>
              <select
                className="pg-select2"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                disabled={!stateName}
              >
                <option value="">{stateName ? "Select city" : "Select state first"}</option>
                {cityOptions.length > 0 ? (
                  cityOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))
                ) : (
                  stateName && <option value="">(Cities not added for this state)</option>
                )}
              </select>
            </div>

            {/* Area */}
            <div className="pg-field">
              <label className="pg-label">Area / Locality</label>
              <input
                className="pg-input"
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Eg: Pernambut, Gandhi Nagar, etc."
              />
            </div>

            {/* Category */}
            <div className="pg-field">
              <label className="pg-label">Complaint Category</label>
              <select className="pg-select2" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select category</option>
                {CATEGORY_LIST.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Complaint */}
            <div className="pg-field">
              <label className="pg-label">Complaint Details</label>
              <textarea
                className="pg-textarea"
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
                placeholder="Write your grievance in detail..."
                rows={4}
              />
            </div>

            <button className="pg-submit" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <div className="pg-footer">© Public Grievance Redressal System — Demo Project</div>
    </div>
  );
}

export default GrievanceForm;
