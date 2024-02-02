const express = require("express");

const app = express();

// Init middleware | gets the res.body
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

app.use("/api/connect", require("./routes/api/connect"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
