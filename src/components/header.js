import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="headerWrapper">
            <div className="headerContainer">
                <div className="logoContainer">
                    <Link to="/" className="logo"><h1>Maillabs</h1></Link>
                </div>
                <div className="headerBtnContainer">
                    <Link to="about"><button className="lightBtn">About</button></Link>
                    <Link to="contact"><button className="lightBtn">Contact</button></Link>
                    <Link to="login"><button className="darkBtn">Log In</button></Link>
                    <Link to="signup"><button className="darkBtn">Sign Up</button></Link>
                </div>
            </div>
        </div>
    );
}