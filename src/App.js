import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Post from './Components/Post'
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends React.Component{
  render(){
  return(
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path = "/" component = {Home} />
      <Route path='/contact' component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/post/:post_id" component={Post} />
    </div>
    </Router>
  );
  }
}

export default App;
