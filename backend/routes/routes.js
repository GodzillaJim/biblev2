const express = require("express");
const Router = express.Router();
const chapterLists = require("./data")

Router.post("/chapters", function (req, res, next) {
  const book = req.body.book;
  const chapters = chapterLists[`${book}`];
  res.status.json(chapters)
});
Router.post("/verses", function (req, res, next) {
  const query = req.body;
  const book = query.book;
  const chapter = query.chapter;
});

export default Router;
