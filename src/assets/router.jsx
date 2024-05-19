import { Navigate, createBrowserRouter } from 'react-router-dom'
import UserLayout from '../components/layouts/UserLayout';
import GuestLayout from '../components/layouts/GuestLayout';
import Dashboard from '../views/Dashboard';
import Blogs from '../views/Blogs';
import Login from '../views/Login';
import Register from '../views/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/dashboard' />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ],

    }
]);

export default router;