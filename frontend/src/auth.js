// src/auth.js

const API_BASE =
  (process.env.REACT_APP_API_URL || "http://127.0.0.1:5001").replace(/\/$/, "");


// ---------- local storage ----------
export function saveAuth({ token, role, userId }) {
  localStorage.setItem("pgms_token", token || "");
  localStorage.setItem("pgms_role", role || "");
  localStorage.setItem("pgms_userId", userId || "");
}

export function logout() {
  localStorage.removeItem("pgms_token");
  localStorage.removeItem("pgms_role");
  localStorage.removeItem("pgms_userId");
}

export function getToken() {
  return localStorage.getItem("pgms_token") || "";
}

export function getRole() {
  return localStorage.getItem("pgms_role") || "";
}

export function getLoggedInUserId() {
  return localStorage.getItem("pgms_userId") || "";
}

export function getAuth() {
  return { token: getToken(), role: getRole(), userId: getLoggedInUserId() };
}

export function isLoggedIn() {
  return Boolean(getToken());
}

// ---------- helpers ----------
async function request(path, options = {}) {
  const token = getToken();

  let res;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
  } catch (err) {
    // This is the real "Failed to fetch" case (backend down / wrong port / blocked)
    throw new Error(`Backend not reachable at ${API_BASE}`);
  }

  let data = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    const msg = data?.error || data?.message || `Request failed: ${res.status}`;
    throw new Error(msg);
  }

  return data;
}

// ---------- AUTH APIs ----------

// USER login
export async function loginUser({ userId, password }) {
  try {
    const data = await request("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ user_id: userId, password }),
    });

    saveAuth({
      token: data.token,
      role: data.role || "user",
      userId: data.userId || userId,
    });

    return { ok: true };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

// ADMIN login
export async function loginAdmin({ email, password }) {
  try {
    const data = await request("/api/auth/admin/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    saveAuth({
      token: data.token,
      role: data.role || "admin",
      userId: data.userId || email,
    });

    return { ok: true };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

// Create new user
export async function createUser(payload) {
  const body = {
    user_id: payload.user_id || payload.userId || payload.userID || "",
    first_name: payload.first_name || payload.firstName || "",
    last_name: payload.last_name || payload.lastName || "",
    mobile: payload.mobile || "",
    gmail: payload.gmail || payload.email || null,
    password: payload.password || "",
  };

  return request("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

// Forgot password (match check)
export async function checkUserIdAndMobile({ userId, mobile }) {
  return request("/api/auth/forgot/check", {
    method: "POST",
    body: JSON.stringify({ user_id: userId, mobile }),
  });
}

// Reset password
export async function resetPasswordByUserIdAndMobile({
  userId,
  mobile,
  newPassword,
}) {
  return request("/api/auth/forgot/reset", {
    method: "POST",
    body: JSON.stringify({
      user_id: userId,
      mobile,
      new_password: newPassword,
    }),
  });
}

// Find user id by mobile
export async function getUserIdByMobile(mobile) {
  return request("/api/auth/forgot/userid", {
    method: "POST",
    body: JSON.stringify({ mobile }),
  });
}

// ---------- Complaint APIs ----------

// IMPORTANT: maps frontend payload into backend/db expected fields
export async function submitComplaint(payload) {
  const body = {
    name: payload.name || "",
    state: payload.state || payload.locationState || "",
    city: payload.city || payload.locationCity || "",
    area: payload.area || payload.locationArea || "",
    category: payload.category || "",
    complaint: payload.complaint || payload.description || payload.message || "",
  };

  return request("/api/complaints", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export async function getMyComplaints() {
  return request("/api/complaints/me", { method: "GET" });
}

export async function adminGetAllComplaints() {
  return request("/api/admin/complaints", { method: "GET" });
}

export async function adminUpdateStatus({ complaintId, status }) {
  return request(`/api/admin/complaints/${complaintId}/status`, {
    method: "PUT",
    body: JSON.stringify({ status }),
  });
}
