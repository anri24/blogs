import { Navigate, Outlet } from "react-router-dom"
import './guestLayout.css'
import { useStateContext } from "../../contexts/ContextProvider"
import Header from "../components/Header";

function GuestLayout() {
    const {token} = useStateContext();

    if(token) return <Navigate to='/admin' />

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default GuestLayout
