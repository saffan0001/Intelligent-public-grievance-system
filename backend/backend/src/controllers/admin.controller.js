// const pool = require("../config/db");

// exports.getAllComplaints = async (req, res) => {
//   try {
//     if (req.user?.role !== "admin") {
//       return res.status(403).json({ error: "Admin only" });
//     }

//     const [rows] = await pool.query(
//       `SELECT id, ticket_no, user_id, name, state, city, area, category, complaint, status, created_at, updated_at
//        FROM complaints
//        ORDER BY id DESC`
//     );

//     return res.json({ ok: true, complaints: rows });
//   } catch (e) {
//     console.error("getAllComplaints:", e);
//     return res.status(500).json({ error: "Server error" });
//   }
// };

// exports.updateComplaintStatus = async (req, res) => {
//   try {
//     if (req.user?.role !== "admin") {
//       return res.status(403).json({ error: "Admin only" });
//     }

//     const id = Number(req.params.id);
//     const { status } = req.body || {};

//     const allowed = ["Pending", "In Progress", "Resolved"];
//     if (!allowed.includes(status)) {
//       return res.status(400).json({ error: "Invalid status" });
//     }

//     await pool.query(`UPDATE complaints SET status=? WHERE id=?`, [status, id]);

//     return res.json({ ok: true });
//   } catch (e) {
//     console.error("updateComplaintStatus:", e);
//     return res.status(500).json({ error: "Server error" });
//   }
// };

const pool = require("../config/db");

exports.getAllComplaints = async (req, res) => {
  try {
    if (req.user?.role !== "admin") {
      return res.status(403).json({ error: "Admin only" });
    }

    const [rows] = await pool.query(
      `SELECT id, ticket_no, user_id, name, state, city, area, category, complaint, status, created_at, updated_at
       FROM complaints
       ORDER BY id DESC`
    );

    return res.json({ ok: true, complaints: rows });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
};

exports.updateComplaintStatus = async (req, res) => {
  try {
    if (req.user?.role !== "admin") {
      return res.status(403).json({ error: "Admin only" });
    }

    const id = Number(req.params.id);
    const { status } = req.body || {};
    const allowed = ["Pending", "In Progress", "Resolved"];

    if (!allowed.includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    await pool.query("UPDATE complaints SET status=? WHERE id=?", [status, id]);
    return res.json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
};
