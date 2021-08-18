var express = require("express");
var path = require("path");
var logger = require("morgan");
const { getDefaultSettings } = require("http2");
const cors = require("cors");

//import routes
const itemRouter = require("./src/resources/items/router");
const reviewRouter = require("./src/resources/reviews/router");
const usersRouter = require("./src/resources/users/router");
const categoryRouter = require("./src/resources/category/router");
const basketRouter = require("./src/resources/basket/router");
const basketItemRouter = require("./src/resources/basketItem/router");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/items", itemRouter);
app.use("/reviews", reviewRouter);
app.use("/users", usersRouter);
app.use("/category", categoryRouter);
app.use("/basket", basketRouter);
app.use("/basket-items", basketItemRouter);

app.use("/", (req, res) => {
  res.json({ msg: true });
});

// app.use("/items", getOneDeal)
// app.use("/review", getDealreview)
// app.use("/review/:id", updateComment)
// app.use("/review/:id", deleteComment)

module.exports = app;
