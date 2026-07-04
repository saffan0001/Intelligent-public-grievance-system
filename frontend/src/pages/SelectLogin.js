// // import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Login.css";

// function SelectLogin() {
//   const navigate = useNavigate();

//   return (
//     <div className="loginPage">
//       <div className="loginTopbar">
//         <div className="loginBrand">
//           <div className="brandIcon">PG</div>
//           <div>
//             <div className="brandTitle">Public Grievance System</div>
//             <div className="brandSub">Choose Login</div>
//           </div>
//         </div>
//       </div>

//       <div className="loginWrap">
//         <div className="loginCard">
//           <h2 className="loginHeading">Select Role</h2>
//           <p className="loginHint">Continue as User or Admin.</p>

//           <div className="roleList">
//             <div className="roleCard" onClick={() => navigate("/login/user")}>
//               <div className="roleLeft">
//                 <div className="roleIcon roleUser">U</div>
//                 <div className="roleText">
//                   <h4>User Login</h4>
//                   <p>Raise complaint & track status</p>
//                 </div>
//               </div>
//               <div className="roleArrow">→</div>
//             </div>

//             <div className="roleCard" onClick={() => navigate("/login/admin")}>
//               <div className="roleLeft">
//                 <div className="roleIcon roleAdmin">A</div>
//                 <div className="roleText">
//                   <h4>Admin Login</h4>
//                   <p>Manage complaints & update status</p>
//                 </div>
//               </div>
//               <div className="roleArrow">→</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="loginFooter">
//         © Public Grievance Redressal System — Demo Project
//       </div>
//     </div>
//   );
// }

// export default SelectLogin;
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function SelectLogin() {
  const navigate = useNavigate();

  return (
    <div className="loginPage">
      <div className="loginTopbar">
        <div className="loginBrand">
          <div className="brandIcon">PG</div>
          <div>
            <div className="brandTitle">Public Grievance System</div>
            <div className="brandSub">Choose Login</div>
          </div>
        </div>
      </div>

      <div className="loginWrap">
        <div className="loginCard">
          <h2 className="loginHeading">Select Role</h2>
          <p className="loginHint">Continue as User or Admin.</p>

          <div className="roleList">
            <div className="roleCard" onClick={() => navigate("/login/user")}>
              <div className="roleLeft">
                <div className="roleIcon roleUser">U</div>
                <div className="roleText">
                  <h4>User Login</h4>
                  <p>Raise complaint & track status</p>
                </div>
              </div>
              <div className="roleArrow">→</div>
            </div>

            <div className="roleCard" onClick={() => navigate("/login/admin")}>
              <div className="roleLeft">
                <div className="roleIcon roleAdmin">A</div>
                <div className="roleText">
                  <h4>Admin Login</h4>
                  <p>Manage complaints & update status</p>
                </div>
              </div>
              <div className="roleArrow">→</div>
            </div>
          </div>
        </div>
      </div>

      <div className="loginFooter">
        © Public Grievance Redressal System — Demo Project
      </div>
    </div>
  );
}

export default SelectLogin;
