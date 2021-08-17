var express = require("express");
var path = require("path");
var logger = require("morgan");
const { getDefaultSettings } = require("http2");

//import routes
const itemRouter = require("./src/resources/items/router");
const reviewRouter = require("./src/resources/reviews/router");

var app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/items", itemRouter);
app.use("/reviews", reviewRouter)

app.use("/", (req, res) => {
    res.json({ msg: true });
});

// app.use("/items", getOneDeal)
// app.use("/review", getDealreview)
// app.use("/review/:id", updateComment)
// app.use("/review/:id", deleteComment)

module.exports = app;
