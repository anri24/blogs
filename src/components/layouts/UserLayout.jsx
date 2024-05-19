import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider"

function UserLayout() {
    const {token} = useStateContext();

    if (!token) return <Navigate to='/login' />

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default UserLayout
