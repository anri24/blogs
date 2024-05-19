import { Outlet } from "react-router-dom"

function UserLayout() {
    return (
        <div>
            user Layout
            <Outlet />
        </div>
    )
}

export default UserLayout
