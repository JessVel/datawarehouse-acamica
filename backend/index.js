const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

connectDB();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.options("*", cors());

const PORT = process.env.PORT || 4000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With, Accept");
  next();
});

app.use("/api/user", require("./routes/user_routes"));
app.use("/api/auth", require("./routes/auth_routes"));
app.use("/api/contact", require("./routes/contact_routes"));
app.use("/api/region", require("./routes/region_routes"));
app.use("/api/country", require("./routes/country_routes"));
app.use("/api/city", require("./routes/city_routes"));
app.use("/api/role", require("./routes/role_routes"));
app.use("/api/channel", require("./routes/channel_routes"));
app.use("/api/company", require("./routes/company_routes"));
app.use('/api/dummy', require("./routes/dummy_routes"))

app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
