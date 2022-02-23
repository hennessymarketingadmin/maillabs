// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./components/pages/home"
import About from "./components/pages/about"
import Contact from "./components/pages/contact"
import Create from './components/pages/create';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;