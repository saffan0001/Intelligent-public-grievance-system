// const pool = require("../config/db");

// function makeTicketNo(counter) {
//   const d = new Date();
//   const yyyy = d.getFullYear();
//   const mm = String(d.getMonth() + 1).padStart(2, "0");
//   const dd = String(d.getDate()).padStart(2, "0");
//   const num = String(counter).padStart(4, "0");
//   return `PG-${yyyy}${mm}${dd}-${num}`;
// }

// exports.createComplaint = async (req, res) => {
//   try {
//     if (req.user?.role !== "user") {
//       return res.status(403).json({ error: "User only" });
//     }

//     const user_id = req.user.user_id;

//     const { name, state, city, area, category, complaint } = req.body || {};
//     if (!name || !state || !city || !area || !category || !complaint) {
//       return res.status(400).json({ error: "Missing complaint fields" });
//     }

//     // counter based on today's count
//     const [countRows] = await pool.query(
//       `SELECT COUNT(*) AS c FROM complaints WHERE DATE(created_at)=CURDATE()`
//     );
//     const counter = Number(countRows[0].c || 0) + 1;
//     const ticket_no = makeTicketNo(counter);

//     await pool.query(
//       `INSERT INTO complaints (ticket_no, user_id, name, state, city, area, category, complaint)
//        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
//       [ticket_no, user_id, name, state, city, area, category, complaint]
//     );

//     return res.json({ ok: true, ticket_no });
//   } catch (e) {
//     console.error("createComplaint:", e);
//     return res.status(500).json({ error: "Server error" });
//   }
// };

// exports.getMyComplaints = async (req, res) => {
//   try {
//     if (req.user?.role !== "user") {
//       return res.status(403).json({ error: "User only" });
//     }

//     const user_id = req.user.user_id;

//     const [rows] = await pool.query(
//       `SELECT id, ticket_no, name, state, city, area, category, complaint, status, created_at, updated_at
//        FROM complaints
//        WHERE user_id=?
//        ORDER BY id DESC`,
//       [user_id]
//     );

//     return res.json({ ok: true, complaints: rows });
//   } catch (e) {
//     console.error("getMyComplaints:", e);
//     return res.status(500).json({ error: "Server error" });
//   }
// };

const pool = require("../config/db");

function makeTicketNo(id) {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `PG-${yyyy}${mm}${dd}-${String(id).padStart(4, "0")}`;
}

exports.createComplaint = async (req, res) => {
  try {
    if (!req.user?.user_id) return res.status(401).json({ error: "Unauthorized" });

    const { name, state, city, area, category, complaint } = req.body || {};

    if (!name || !state || !city || !area || !category || !complaint) {
      return res.status(400).json({ error: "All fields required" });
    }

    const [result] = await pool.query(
      `INSERT INTO complaints (ticket_no, user_id, name, state, city, area, category, complaint, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'Pending')`,
      ["TEMP", req.user.user_id, name, state, city, area, category, complaint]
    );

    const insertedId = result.insertId;
    const ticketNo = makeTicketNo(insertedId);

    await pool.query("UPDATE complaints SET ticket_no=? WHERE id=?", [ticketNo, insertedId]);

    return res.json({ ok: true, id: insertedId, ticket_no: ticketNo });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
};

exports.getMyComplaints = async (req, res) => {
  try {
    if (!req.user?.user_id) return res.status(401).json({ error: "Unauthorized" });

    const [rows] = await pool.query(
      `SELECT id, ticket_no, name, state, city, area, category, complaint, status, created_at, updated_at
       FROM complaints
       WHERE user_id=?
       ORDER BY id DESC`,
      [req.user.user_id]
    );

    return res.json({ ok: true, complaints: rows });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
};
  