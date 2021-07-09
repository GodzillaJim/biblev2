const booksChapters = require('./chapters')
const fullBibleV = require('./fullBible.json')
class Bible{
   books = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Songs", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];
   booksAndChapters = booksChapters
   full = fullBibleV;

   getBooks(){
      //Get all books of the bibe in an array
      return this.books;
   }
   getChapters(){
      //Get all chapters of Genesis in an array
      return this.booksChapters["Genesis"]
   }
   getChaptersQuery(book){
      //Get all chapters of a book in an array
      book.replace(/\s/g, '')
      return this.booksChapters[`${book}`];
   }
   getNumberOfVerses(){
      //get all verses of Genesis chapter 1
      let numberOfVerses =  this.full["Genesis"][0].verses.length
      let verses = []
      for(let a =1; a<= numberOfVerses; a++){
         verses.push(a)
      }
      return verses;
   }
   getNUmberOfVersesQuery(book, chapter){
      //Get all verses of a book and chapter
      book.replace(/\s/g, '')
      let numberOfVerses =  this.full[`${book}`][`${chapter}`].verses.length
      let verses = []
      for(let a =1; a<= numberOfVerses; a++){
         verses.push(a)
      }
      return verses;
   }
   getVerse(){
      //Get Genesis 1:1
      return this.full[`Genesis`][0].verses[0].text
   }
   getSpecificVerse(book, chapter, verse){
      //Get specific verse in text format
      book.replace(/\s/g,'')
      return this.full[`${book}`][chapter - 1].verses[verse - 1].text
   }
   getAllVersesOfAChapter(book, chapter){
      book.replace(/\s/g, '')
      return this.full[`${book}`][`${chapter}`].verses
   }

}
module.exports = Bible