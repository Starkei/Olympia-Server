const env = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

//enable config
env.config();

const app = express();

//process variables
const port = process.env.PORT || 8080;
const password = process.env.DB_PASSWORD;
const user = process.env.DB_USER;

//database
mongoose.connect(`mongodb+srv://${user}:${password}@cluster0-y8wr4.azure.mongodb.net/olympia?retryWrites=true`, {
    useNewUrlParser: true
});

mongoose.connection.on("open", () => {
    console.log("connected");
});

//routers
const productRouter = require("./routers/products.router");

app.use("/", productRouter);

const server = app.listen(port, () => {
    console.log(`server has been started on port ${port}`);
});

process.on("SIGINT", () => {
    console.log("disconnect DB");
    mongoose.disconnect();
    console.log("close server");
    server.close();
});

process.on("SIGTERM", () => {
    console.log("disconnect DB");
    mongoose.disconnect();
    console.log("close server");
    server.close();
});

process.on("exit", () => {
    console.log("disconnect DB");
    mongoose.disconnect();
    console.log("close server");
    server.close();
});