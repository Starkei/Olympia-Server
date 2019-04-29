const env = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const pid = process.pid;

//enable config
env.config();

const app = express();

//middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//process variables
const port = process.env.PORT || 8080;
const password = process.env.DB_PASSWORD;
const user = process.env.DB_USER;

//database
mongoose.connect(
  `mongodb+srv://${user}:${password}@cluster0-y8wr4.azure.mongodb.net/olympia?retryWrites=true`,
  {
    useNewUrlParser: true
  }
);

//routers
const productRouter = require("./routers/products.router");
const crowdfundingRouter = require("./routers/crowdfunding.router");
const sportRouter = require("./routers/sport.router");
const eventRouter = require("./routers/event.router");

app.use("/", productRouter);
app.use("/", crowdfundingRouter);
app.use("/", sportRouter);
app.use("/", eventRouter);

const server = app.listen(port, () => {
  console.log(`PID = ${pid}`);
});

process.on("SIGINT", () => {
  mongoose.disconnect();
  server.close();
});

process.on("SIGTERM", () => {
  mongoose.disconnect();
  server.close();
});

process.on("exit", () => {
  mongoose.disconnect();
  server.close();
});

module.exports = app;
