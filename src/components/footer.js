import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footerWrapper">
        <div className="footerContainer">
            <Link to="/" className="footerLogo"><h1>Maillabs</h1></Link>
            <Link to="create" className="footerBtn"><a className="footerBtn">Get Started</a></Link>
            <Link to="about" className="footerBtn"><a className="footerBtn">About</a></Link>
            <Link to="contact" className="footerBtn"><a className="footerBtn">Contact</a></Link>
            <Link to="login" className="footerBtn"> <a className="footerBtn">Log In</a></Link>
            <Link to="signup" className="footerBtn"><a className="footerBtn">Sign Up</a></Link>
        </div>
    </div>
    );
  }