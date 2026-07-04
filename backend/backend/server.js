// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const authRoutes = require("./src/routes/auth.routes");
// const complaintsRoutes = require("./src/routes/complaints.routes");
// const adminRoutes = require("./src/routes/admin.routes");

// const app = express();

// app.use(cors({
//   origin: true,
//   credentials: true
// }));
// app.use(express.json());

// app.get("/", (req, res) => res.send("Backend running ✅"));
// app.get("/api/health", (req, res) => res.json({ ok: true }));

// app.use("/api/auth", authRoutes);
// app.use("/api/complaints", complaintsRoutes);
// app.use("/api/admin", adminRoutes);

// // helpful error output
// app.use((err, req, res, next) => {
//   console.error("🔥 GLOBAL ERROR:", err);
//   res.status(500).json({ error: "Server error" });
// });

// const PORT = Number(process.env.PORT || 5000);
// app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));

require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
