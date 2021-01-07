const jsonServer = require("json-server");
const app = jsonServer.create();
const path = require("path");
const express = require("express");
const middlewares = jsonServer.defaults();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3001;
const cors = require("cors");

app.use(cors());
app.use("/db", middlewares, router);
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
