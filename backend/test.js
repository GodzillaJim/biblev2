const bibleClass = require('./data/bibleClass')
const chapterList = require('./data/chapters')

const bible = new bibleClass();
console.log(bible.getAllVersesOfAChapter("Amos", 1));