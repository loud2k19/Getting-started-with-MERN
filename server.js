const express = require("express");
const connectDB = require("./config/db");
const app = express();

//connect db
connectDB();
app.get("/", (req, res) => res.send("API is running"));

//init middleware
app.use(express.json({ extend: false }));

//define routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/post", require("./routes/api/post"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server has startet ${PORT}`));
