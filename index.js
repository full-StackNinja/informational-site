const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static("public/defaultStyles"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/htmlFiles", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public/htmlFiles", "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "public/htmlFiles", "contact-me.html"));
});

const errMessage = (req, res, next) => {
  res.contentType("text/html");
  res
    .status(404)
    .sendFile(path.join(__dirname, "public/htmlFiles", "404.html"));
};

app.use(errMessage);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
