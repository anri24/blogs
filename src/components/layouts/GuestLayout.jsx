import { Outlet } from "react-router-dom"
import './guestLayout.css'

function GuestLayout() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default GuestLayout
