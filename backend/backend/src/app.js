const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const complaintsRoutes = require("./routes/complaints.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("Backend running ✅"));
app.get("/api/health", (req, res) => res.json({ ok: true }));

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintsRoutes);
app.use("/api/admin", adminRoutes);

app.use((err, req, res, next) => {
  console.error("🔥 GLOBAL ERROR:", err);
  res.status(500).json({ error: "Server error" });
});

module.exports = app;
