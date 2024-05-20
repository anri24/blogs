import { Link } from "react-router-dom"
import './header.css'
import axiosClient from "../axios-client"
import { useStateContext } from "../contexts/ContextProvider"

function Header() {

    const {setUser, setToken} = useStateContext();


    function logout(){
        axiosClient.post('/logout')
        .then(() => {
            setUser({});
            setToken(null)
        })
    }

    return (
        <header className="header">
            <div className="header-div">
                <div>
                    <Link to='/' className="header-link main-link">Logo</Link>
                </div>
                <div className="header-links">
                    <Link to='/blogs' className="header-link">Blogs</Link>
                    <Link to='/about' className="header-link">About Us</Link>
                    <Link to='/contact' className="header-link">Contact Us</Link>
                    <button onClick={logout} className="header-link">Logout</button>
                </div>
            </div>
        </header>
    )
}

export default Header
