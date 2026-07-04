const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function signToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
}

// USER REGISTER
exports.registerUser = async (req, res) => {
  try {
    const { user_id, first_name, last_name, mobile, gmail, password } = req.body;

    if (!user_id || !first_name || !last_name || !mobile || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const password_hash = await bcrypt.hash(password, 10);

    await pool.query(
      `INSERT INTO users (user_id, first_name, last_name, mobile, gmail, password_hash)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [user_id.trim(), first_name.trim(), last_name.trim(), mobile.trim(), gmail || null, password_hash]
    );

    return res.json({ ok: true });
  } catch (e) {
    if (String(e).toLowerCase().includes("duplicate")) {
      return res.status(409).json({ error: "User ID or mobile already exists" });
    }
    console.error("registerUser:", e);
    return res.status(500).json({ error: "Server error" });
  }
};

// USER LOGIN
exports.loginUser = async (req, res) => {
  try {
    const { user_id, password } = req.body;
    if (!user_id || !password) return res.status(400).json({ error: "Missing credentials" });

    const [rows] = await pool.query(`SELECT * FROM users WHERE user_id=?`, [user_id.trim()]);
    const user = rows[0];
    if (!user) return res.status(401).json({ error: "Invalid User ID or password" });

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: "Invalid User ID or password" });

    const token = signToken({ role: "user", id: user.id, user_id: user.user_id });

    return res.json({ ok: true, token, role: "user", userId: user.user_id });
  } catch (e) {
    console.error("loginUser:", e);
    return res.status(500).json({ error: "Server error" });
  }
};

// ADMIN LOGIN (supports plain OR bcrypt)
exports.loginAdmin = async (req, res) => {
  try {
    const admin_id = (req.body.admin_id || req.body.email || "").trim();
    const { password } = req.body;
    if (!admin_id || !password) return res.status(400).json({ error: "Missing credentials" });

    const [rows] = await pool.query(`SELECT * FROM admins WHERE admin_id=?`, [admin_id]);
    const admin = rows[0];
    if (!admin) return res.status(401).json({ error: "Invalid Admin credentials" });

    let ok = false;
    if ((admin.password_hash || "").startsWith("$2")) ok = await bcrypt.compare(password, admin.password_hash);
    else ok = password === admin.password_hash;

    if (!ok) return res.status(401).json({ error: "Invalid Admin credentials" });

    const token = signToken({ role: "admin", id: admin.id, admin_id: admin.admin_id });

    return res.json({ ok: true, token, role: "admin", userId: admin.admin_id });
  } catch (e) {
    console.error("loginAdmin:", e);
    return res.status(500).json({ error: "Server error" });
  }
};

// FORGOT CHECK
exports.checkUserIdAndMobile = async (req, res) => {
  try {
    const { user_id, mobile } = req.body;
    if (!user_id || !mobile) return res.status(400).json({ error: "Missing fields" });

    const [rows] = await pool.query(
      `SELECT id FROM users WHERE user_id=? AND mobile=?`,
      [user_id.trim(), mobile.trim()]
    );

    if (!rows[0]) return res.status(404).json({ ok: false, error: "Match not found" });
    return res.json({ ok: true, msg: "Match found" });
  } catch (e) {
    console.error("checkUserIdAndMobile:", e);
    return res.status(500).json({ error: "Server error" });
  }
};

// FORGOT RESET
exports.resetPasswordByUserIdAndMobile = async (req, res) => {
  try {
    const { user_id, mobile, new_password } = req.body;
    if (!user_id || !mobile || !new_password) return res.status(400).json({ error: "Missing fields" });

    const [rows] = await pool.query(
      `SELECT id FROM users WHERE user_id=? AND mobile=?`,
      [user_id.trim(), mobile.trim()]
    );
    if (!rows[0]) return res.status(404).json({ error: "Match not found" });

    const password_hash = await bcrypt.hash(new_password, 10);

    await pool.query(
      `UPDATE users SET password_hash=? WHERE user_id=? AND mobile=?`,
      [password_hash, user_id.trim(), mobile.trim()]
    );

    return res.json({ ok: true, msg: "Password updated" });
  } catch (e) {
    console.error("resetPassword:", e);
    return res.status(500).json({ error: "Server error" });
  }
};

// FIND USERID BY MOBILE
exports.findUserIdByMobile = async (req, res) => {
  try {
    const { mobile } = req.body;
    if (!mobile) return res.status(400).json({ error: "Mobile required" });

    const [rows] = await pool.query(`SELECT user_id FROM users WHERE mobile=?`, [mobile.trim()]);
    if (!rows[0]) return res.status(404).json({ error: "No user found" });

    return res.json({ ok: true, user_id: rows[0].user_id });
  } catch (e) {
    console.error("findUserIdByMobile:", e);
    return res.status(500).json({ error: "Server error" });
  }
};
