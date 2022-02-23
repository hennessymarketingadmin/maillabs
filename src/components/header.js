

export default function Header() {
    return (
        <div className="headerWrapper">
            <div className="headerContainer">
                <div className="logoContainer">
                    <h1>Maillabs</h1>
                </div>
                <div className="headerBtnContainer">
                    <button className="lightBtn">About</button>
                    <button className="lightBtn">Contact</button>
                    <button className="darkBtn">Log In</button>
                    <button className="darkBtn">Sign Up</button>
                </div>
            </div>
        </div>
    );
}