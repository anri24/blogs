import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider"
import Header from "../Header";

function UserLayout() {
    const {token} = useStateContext();

    if (!token) return <Navigate to='/login' />

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default UserLayout
