import { Navigate, Outlet } from "react-router-dom"
import './guestLayout.css'
import { useStateContext } from "../../contexts/ContextProvider"
import Header from "../Header";

function GuestLayout() {
    const {token} = useStateContext();

    if(token) return <Navigate to='/' />

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default GuestLayout
