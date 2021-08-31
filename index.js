const express = require("express");
var path = require("path");
const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("public/index");
});

app.get("/watch", (req, res) => {
  res.render("pages/index", { videoId: req.query.v });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
