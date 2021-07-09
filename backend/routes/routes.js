const express = require("express");
const Router = express.Router();
const chapterLists = require("../data/chapters")
const bibleClass = require('../data/bibleClass')

const bible = new bibleClass();

Router.post("/chapters", function (req, res, next) {
  const book = req.body.book;
  const chapters = chapterLists[`${book}`];
  res.status.json(chapters)
});
Router.post("/verses", function (req, res, next) {
  const query = req.body;
  const book = query.book;
  const chapter = query.chapter;
  let verses = bible.getNumberOfVersesQuery(book, chapter);
  return res.status.json(verses);
});
Router.post("/verse", function (req, res, next) {
  const query = req.body
  const book = req.body.book
  const chapter = req.body.chapter
  const verse = req.body.verse
  return res.status(200).json(bible.getSpecificVerse(book, chapter, verse));
})
Router.post("chapter", function (req, res, next) {
  const query = req.body
  const book = query.book
  const chapter = query.chapter

  return res.status(200).json(bible.getAllVersesOfAChapter(book, chapter));
})
module.exports = Router;
