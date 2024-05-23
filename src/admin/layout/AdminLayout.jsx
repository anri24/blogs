import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider"
import AdminHeader from "../components/AdminHeader";

function AdminLayout() {
    const {token} = useStateContext();

    if (!token) return <Navigate to='/login' />

    return (
        <div>
            <AdminHeader />
            <Outlet />
        </div>
    )
}

export default AdminLayout
