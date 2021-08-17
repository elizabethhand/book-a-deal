var express = require("express");
var path = require("path");
var logger = require("morgan");
const { getDefaultSettings } = require("http2");
// const {
//   getDeals,
//   getOneDeal,
//   getDealComments,
// } = require("./resources/controller");
// const { updateComments } = require("./src/resources/items/controller");

//import routes
const itemRouter = require("./src/resources/items/router");

var app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/items", itemRouter);

app.use("/", (req, res) => {
  res.json({ msg: true });
});

// app.use("/items", getOneDeal)
// app.use("/comments", getDealComments)
// app.use("/comments/:id", updateComment)
// app.use("/comments/:id", deleteComment)

module.exports = app;
