const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("express").Router();
const routes = require("./routers/index.Router");
const adminRoute = require("./routers/admin.Router");
const userRoutes = require("./routers/userRoutes");
const professionnelRoutes = require("./routers/professionnelRoutes");
const uploadRoutes = require("./routers/uploadRoutes");
const contactMailRoutes = require("./routers/contactMailRoutes");
const smsRoute = require("./routers/smsRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");
dotenv.config();

const corsOptions = {
  exposedHeaders: "Authorization",
};

app.use("/admin", adminRoute);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(routes);
app.use(userRoutes);
app.use(professionnelRoutes);
app.use(uploadRoutes);
app.use(contactMailRoutes);
app.use(smsRoute);
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json({ limit: "10mb", extended: true }));

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log("db connected");

    const PORT = 3001;
    app.listen(PORT, () => {
      console.log("server is active");
    });
  }
);
