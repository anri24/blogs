import { Link } from "react-router-dom"
import './header.css'

function Header() {
    return (
        <header className="header">
            <div>
                <Link to='/' className="link main-link">Logo</Link>
            </div>
            <div className="header-links">
                <Link to='/blogs' className="link">Blogs</Link>
                <Link to='/about' className="link">About Us</Link>
                <Link to='/contact' className="link">Contact Us</Link>
            </div>
        </header>
    )
}

export default Header
