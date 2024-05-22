import { Link } from "react-router-dom"
import axiosClient from "../../axios-client"
import { useStateContext } from "../../contexts/ContextProvider"
import './header.css'

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
                    <Link to='/admin/blogs' className="header-link">Blogs</Link>
                    <button onClick={logout} className="header-link">Logout</button>
                </div>
            </div>
        </header>
    )
}

export default Header
