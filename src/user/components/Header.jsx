import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <div className="header-div">
                <div>
                    <Link to='/' className="header-link main-link">Logo</Link>
                </div>
                <div className="header-links">
                    <Link to='/about' className="header-link">About Us</Link>
                    <Link to='/contact' className="header-link">Contact Us</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
