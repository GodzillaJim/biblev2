import React from "react";
import {
  Container, Navbar, Nav
} from "react-bootstrap"
import { BrowserRouter as Router } from "react-router-dom";
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

class NavbarPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      book: "Genesis",
      isOpen: false,
      books: ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"]
    }
    this.toggleCollapse = this.toggleCollapse.bind(this)
    this.setBook = this.setBook.bind(this)
  }
  setBook(e){
    this.setState({book: e.target.value})
  }
  toggleCollapse (){
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const styleNavbar = {
      "-webkit-box-shadow": "5px 5px 14px 2px rgba(0,0,0,0.43)",
      "box-shadow":"5px 5px 14px 2px rgba(0,0,0,0.43)",
"background-color":"white",
"min-height":"75px"
    }
    return (
      <Navbar expand = "lg" style={styleNavbar}>
          <Navbar.Brand>
            God's Word
          </Navbar.Brand>
          <Navbar.Toggle aria-controls = "basic-navbar-nav" style={{margin:"5px"}}/>
            <Navbar.Collapse id = "basic-navbar-nav">
              <Nav className = "m-auto row">
                <Nav.Item className="col-lg-auto">
                  <Autocomplete
                  onChange = {this.setBook}
                    id="book"
                  options = {this.state.books}
                  getOptionLabel = {(option => option)}
                  renderInput={(params) => <TextField {...params} label="Book" variant="outlined" />}
                  />
                </Nav.Item>
                <Nav.Item className = "col-lg-auto" >
                  <Autocomplete
                  onChange = {this.setchapter}
                  id = "book"
                  options = {this.state.chapter}/>
                  
                </Nav.Item>
                <Nav.Item className = "col" >
                  <Nav.Link>Verse</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default NavbarPage;
