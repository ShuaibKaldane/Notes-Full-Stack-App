const express = require("express");
const cors = require("cors");

const app = express();

// ✅ MUST BE AT TOP
app.use(cors({
  origin: "http://localhost:5173"
}));

// ✅ Middleware
app.use(express.json());

// routes
const routes = require("./routes/taskRoutes");
app.use(routes);

// test route
app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(8080, () => {
  console.log("Server is started");
});