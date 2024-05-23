import { Link } from "react-router-dom"
import axiosClient from "../../axios-client"
import { useStateContext } from "../../contexts/ContextProvider"
import './adminHeader.css'

function AdminHeader() {

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
                <div className="admin-header-links">
                    <button onClick={logout} className="header-link">Logout</button>
                </div>
            </div>
        </header>
    )
}

export default AdminHeader
