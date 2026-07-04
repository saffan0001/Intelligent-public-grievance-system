import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import {
  checkUserIdAndMobile,
  resetPasswordByUserIdAndMobile,
  getUserIdByMobile,
} from "../auth";

function ForgotPassword() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("password"); // "password" | "userid"
  const [userId, setUserId] = useState("");
  const [mobile, setMobile] = useState(""); // store as +91XXXXXXXXXX
  const [foundUserId, setFoundUserId] = useState("");

  const [matchOk, setMatchOk] = useState(false);

  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const normalizeMobile = (digits) => {
    const only = (digits || "").replace(/\D/g, "").slice(0, 10);
    return only.length === 10 ? `+91${only}` : "";
  };

  const mobilePretty = useMemo(() => {
    const d = (mobile || "").replace("+91", "");
    return d;
  }, [mobile]);

  const validatePassword = (p) => p && p.length >= 6;

  const onCheckMatch = async () => {
    setError("");
    setSuccess("");
    setMatchOk(false);

    const m = normalizeMobile(mobilePretty);
    if (!userId || !m) {
      setError("Enter User ID and 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);
      await checkUserIdAndMobile({ userId, mobile: m });
      setMatchOk(true);
      setSuccess("✅ Match found. You can create a new password now.");
    } catch (e) {
      setError(e.message || "User ID and mobile number do not match.");
      setMatchOk(false);
    } finally {
      setLoading(false);
    }
  };

  const onReset = async () => {
    setError("");
    setSuccess("");

    const m = normalizeMobile(mobilePretty);
    if (!userId || !m) {
      setError("Enter User ID and mobile number.");
      return;
    }
    if (!matchOk) {
      setError("Please click 'Check Match' first.");
      return;
    }
    if (!validatePassword(newPass)) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (newPass !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      await resetPasswordByUserIdAndMobile({ userId, mobile: m, newPassword: newPass });

      setSuccess("✅ Password updated successfully. Please login.");
      setTimeout(() => navigate("/login/user", { replace: true }), 900);
    } catch (e) {
      setError(e.message || "Failed to reset password.");
      setMatchOk(false);
    } finally {
      setLoading(false);
    }
  };

  const onFindUserId = async () => {
    setError("");
    setSuccess("");
    setFoundUserId("");

    const m = normalizeMobile(mobilePretty);
    if (!m) {
      setError("Enter 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);
      const data = await getUserIdByMobile(m);
      setFoundUserId(data.user_id || data.userId || "");
      setSuccess("✅ User ID found for this mobile number.");
    } catch (e) {
      setError(e.message || "No user found for this mobile.");
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
            <div className="brandSub">Reset / Recover</div>
          </div>
        </div>
      </div>

      <div className="loginWrap">
        <div className="loginCard">
          <h2 className="loginHeading">
            {mode === "password" ? "Forgot Password" : "Forgot User ID"}
          </h2>
          <p className="loginHint">
            {mode === "password"
              ? "Verify User ID + Mobile number to reset your password."
              : "Enter mobile number to find your User ID."}
          </p>

          <div className="roleList" style={{ marginTop: 10 }}>
            <div
              className="roleCard"
              onClick={() => {
                setMode("password");
                setError("");
                setSuccess("");
                setFoundUserId("");
                setMatchOk(false);
              }}
            >
              <div className="roleLeft">
                <div className="roleIcon roleUser">P</div>
                <div className="roleText">
                  <h4>Password Reset</h4>
                  <p>User ID + Mobile → New password</p>
                </div>
              </div>
              <div className="roleArrow">→</div>
            </div>

            <div
              className="roleCard"
              onClick={() => {
                setMode("userid");
                setError("");
                setSuccess("");
                setFoundUserId("");
                setMatchOk(false);
              }}
            >
              <div className="roleLeft">
                <div className="roleIcon roleAdmin">ID</div>
                <div className="roleText">
                  <h4>User ID Recovery</h4>
                  <p>Mobile → show User ID</p>
                </div>
              </div>
              <div className="roleArrow">→</div>
            </div>
          </div>

          {error && <div className="loginError">{error}</div>}
          {success && <div className="loginSuccess">{success}</div>}

          <div className="loginForm">
            {mode === "password" && (
              <>
                <label>User ID</label>
                <input
                  type="text"
                  placeholder="Eg: saffan.mohammed@pgms.in"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />

                <label>Mobile Number (India)</label>
                <div className="inputWrap" style={{ display: "flex", gap: 8 }}>
                  <input style={{ width: 70 }} value="+91" readOnly />
                  <input
                    type="text"
                    placeholder="10-digit mobile"
                    value={mobilePretty}
                    onChange={(e) =>
                      setMobile(`+91${e.target.value.replace(/\D/g, "").slice(0, 10)}`)
                    }
                  />
                </div>

                <button className="btnPrimary" type="button" onClick={onCheckMatch} disabled={loading}>
                  {loading ? "Checking..." : "Check Match"}
                </button>

                {matchOk && (
                  <>
                    <label>New Password</label>
                    <input
                      type="password"
                      placeholder="Minimum 6 characters"
                      value={newPass}
                      onChange={(e) => setNewPass(e.target.value)}
                    />

                    <label>Confirm New Password</label>
                    <input
                      type="password"
                      placeholder="Re-enter new password"
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                    />

                    <button className="btnPrimary" type="button" onClick={onReset} disabled={loading}>
                      {loading ? "Resetting..." : "Reset Password"}
                    </button>
                  </>
                )}

                {!matchOk && (
                  <button className="btnGhost" type="button" onClick={() => navigate("/create-id")}>
                    Create New User ID
                  </button>
                )}
              </>
            )}

            {mode === "userid" && (
              <>
                <label>Mobile Number (India)</label>
                <div className="inputWrap" style={{ display: "flex", gap: 8 }}>
                  <input style={{ width: 70 }} value="+91" readOnly />
                  <input
                    type="text"
                    placeholder="10-digit mobile"
                    value={mobilePretty}
                    onChange={(e) =>
                      setMobile(`+91${e.target.value.replace(/\D/g, "").slice(0, 10)}`)
                    }
                  />
                </div>

                <button className="btnPrimary" type="button" onClick={onFindUserId} disabled={loading}>
                  {loading ? "Searching..." : "Find My User ID"}
                </button>

                {foundUserId && (
                  <div className="idBox">
                    <div className="idBoxLabel">Your User ID</div>
                    <div className="idBoxValue">{foundUserId}</div>
                    <div className="idBoxHint">Use this User ID to login.</div>
                  </div>
                )}
              </>
            )}

            <button className="btnGhost" type="button" onClick={() => navigate("/login/user")}>
              ← Back to Login
            </button>
          </div>
        </div>
      </div>

      <div className="loginFooter">© Public Grievance Redressal System — Demo Project</div>
    </div>
  );
}

export default ForgotPassword;
